import { ModuleArguments } from '@rxdi/core';
export interface ModuleType<T, K> extends ModuleArguments<T, K> {
    controllers?: Array<any>;
    effects?: Array<any>;
    routes?: Array<any>;
}
export declare function Module<T, K extends keyof T>(options?: ModuleType<T, K>): Function;
