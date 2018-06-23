import { ModuleWithServices } from '@rxdi/core';
import { HapiConfigInterface } from './hapi.module.config';
export declare class HapiModule {
    static forRoot(config?: HapiConfigInterface): ModuleWithServices;
}
export * from './decorators';
export * from './hapi.module.config';
export * from './plugin/hapi.plugin';
export * from './services/index';
