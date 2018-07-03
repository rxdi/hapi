import { Service, Inject } from "@rxdi/core";
import { HAPI_SERVER, HAPI_CONFIG, HapiConfigModel } from "../../hapi.module.config";
import { Server } from "hapi";
import inert = require('inert');

@Service()
export class InertService {

    constructor(
        @Inject(HAPI_SERVER) private server: Server,
        @Inject(HAPI_CONFIG) private config: HapiConfigModel
    ) {}

    OnInit() {
        this.register();
    }

    async register() {
        await this.registerInertPlugin();
        if (Object.keys(this.config.staticConfig)) {
            this.server.route(this.config.staticConfig);
        }
    }

    async registerInertPlugin() {
        await this.server.register(inert);

    }

}