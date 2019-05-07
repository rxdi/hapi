import { Server } from 'hapi';
import { HapiPlugin } from './plugins/hapi.plugin';
import { ServerService } from './services/server/server.service';
import { ModuleWithServices, Module } from '@rxdi/core';
import { HAPI_CONFIG, HapiConfigModel, HAPI_SERVER, HAPI_PLUGINS } from './hapi.module.config';
import { InertPlugin } from './plugins/inert/inert.plugin';
import { OpenService } from './services/open/open.service';

@Module({
    services: [ServerService, OpenService],
    plugins: [HapiPlugin, InertPlugin]
})
export class HapiModule {
    public static forRoot(config?: HapiConfigModel): ModuleWithServices {
        config = Object.assign({}, config || new HapiConfigModel());
        config.randomPort && config.hapi.port ? config.hapi.port = null : null;
        return {
            module: HapiModule,
            services: [
                {
                    provide: HAPI_CONFIG,
                    useValue: config || new HapiConfigModel()
                },
                {
                    provide: HAPI_SERVER,
                    deps: [HAPI_CONFIG],
                    useFactory: (config: HapiConfigModel) => {
                        delete config.plugins;
                        return new Server(config.hapi);
                    }
                },
                {
                    provide: HAPI_PLUGINS,
                    useValue: config.plugins || []
                },
            ],
        };
    }
}

export * from './hapi.module.config';
export * from './plugins/index';
export * from './services/index';