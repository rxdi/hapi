import { InjectionToken } from "@rxdi/core";
import { PluginNameVersion, PluginBase, PluginPackage, ServerOptions } from 'hapi';
export declare class HapiConfigInterface {
    randomPort?: boolean;
    hapi?: ServerOptions;
    plugins?: Array<PluginBase<any> & (PluginNameVersion | PluginPackage)>;
}
export declare const HAPI_CONFIG: InjectionToken<HapiConfigInterface>;
export declare const HAPI_SERVER: InjectionToken<any>;
export declare const HAPI_PLUGINS: InjectionToken<((PluginBase<any> & PluginNameVersion) | (PluginBase<any> & PluginPackage))[]>;
