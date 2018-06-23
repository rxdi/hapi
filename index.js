"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = require("hapi");
const hapi_plugin_1 = require("./plugin/hapi.plugin");
const server_service_1 = require("./services/server/server.service");
const core_1 = require("@rxdi/core");
const hapi_module_config_1 = require("./hapi.module.config");
let HapiModule = HapiModule_1 = class HapiModule {
    static forRoot(config) {
        config = config || {};
        config.randomPort && config.hapi.port ? config.hapi.port = null : null;
        return {
            module: HapiModule_1,
            services: [
                {
                    provide: hapi_module_config_1.HAPI_CONFIG,
                    useValue: config || new hapi_module_config_1.HapiConfigInterface()
                },
                {
                    provide: hapi_module_config_1.HAPI_SERVER,
                    deps: [hapi_module_config_1.HAPI_CONFIG],
                    useFactory: (config) => new hapi_1.Server(config.hapi)
                },
                {
                    provide: hapi_module_config_1.HAPI_PLUGINS,
                    useValue: config.plugins || []
                },
            ],
        };
    }
};
HapiModule = HapiModule_1 = __decorate([
    core_1.Module({
        services: [server_service_1.ServerService],
        plugins: [hapi_plugin_1.HapiPlugin]
    })
], HapiModule);
exports.HapiModule = HapiModule;
__export(require("./decorators"));
__export(require("./hapi.module.config"));
__export(require("./plugin/hapi.plugin"));
__export(require("./services/index"));
var HapiModule_1;
