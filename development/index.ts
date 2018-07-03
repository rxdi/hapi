import { Server } from 'hapi';
import { HapiPlugin } from './plugin/hapi.plugin';
import { ServerService } from './services/server/server.service';
import { ModuleWithServices, Module } from '@rxdi/core';
import { HAPI_CONFIG, HapiConfigInterface, HAPI_SERVER, HAPI_PLUGINS } from './hapi.module.config';
import { InertService } from './services/inert/inert.service';
import { OpenService } from './services/open/open.service';

@Module({
    services: [ServerService, InertService, OpenService],
    plugins: [HapiPlugin]
})
export class HapiModule {
    public static forRoot(config?: HapiConfigInterface): ModuleWithServices {
        config = config || {};
        config.randomPort && config.hapi.port ? config.hapi.port = null : null;
        return {
            module: HapiModule,
            services: [
                {
                    provide: HAPI_CONFIG,
                    useValue: config || new HapiConfigInterface()
                },
                {
                    provide: HAPI_SERVER,
                    deps: [HAPI_CONFIG],
                    useFactory: (config: HapiConfigInterface) => new Server(config.hapi)
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
export * from './plugin/hapi.plugin';
export * from './services/index';