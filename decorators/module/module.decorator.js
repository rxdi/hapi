"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
function Module(options) {
    const controllers = options.controllers || [];
    const effects = options.controllers || [];
    const imports = options.imports || [];
    const services = options.services || [];
    const plugins = options.plugins || [];
    const routes = options.routes || [];
    return core_1.Module({
        imports: [...imports],
        services: [...services, ...effects, ...controllers],
        plugins: [...plugins, ...routes]
    });
}
exports.Module = Module;
