import { Service, Inject } from "@rxdi/core";
import opn = require('opn');
import { HAPI_SERVER } from "../../hapi.module.config";
import { Server } from "hapi";

@Service()
export class OpenService {

    constructor(
        @Inject(HAPI_SERVER) private server: Server,
    ) { }

    async openServerPage() {
        await opn(`http://${this.server.info.address}:${this.server.info.port}/public`);
    }

    async openGraphQLPage() {
        await opn(`http://${this.server.info.address}:${this.server.info.port}/graphiql`);
    }

    async openPage(link) {
        await opn(link);
    }

}