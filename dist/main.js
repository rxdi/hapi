parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hapi.module.config.ts":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@rxdi/core");class n{constructor(){this.staticConfig={method:"GET",path:"/public/{param*}",handler:{directory:{path:"public",index:["index.html","default.html"]}}}}}exports.HapiConfigModel=n,exports.HAPI_CONFIG=new e.InjectionToken("hapi-config-injection-token"),exports.HAPI_SERVER=new e.InjectionToken("hapi-server-injection-token"),exports.HAPI_PLUGINS=new e.InjectionToken("hapi-plugins-injection-token");
},{}],"services/server/server.service.ts":[function(require,module,exports) {
"use strict";var e,t,r,i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}},s=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,o){function s(e){try{u(i.next(e))}catch(t){o(t)}}function c(e){try{u(i.throw(e))}catch(t){o(t)}}function u(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(s,c)}u((i=i.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const c=require("@rxdi/core"),u=require("../../hapi.module.config"),a=require("hapi");let l=class{constructor(e,t,r,i){this.server=e,this.plugins=t,this.logger=r,this.exitHandler=i,this.exitHandler.errorHandler.subscribe(()=>s(this,void 0,void 0,function*(){return yield this.server.stop()}))}start(){return s(this,void 0,void 0,function*(){this.plugins.length&&(yield this.registerPlugins(this.plugins));try{yield this.server.start()}catch(e){throw new Error(e)}this.logger.log(`\n            Server running at: http://${this.server.info.address}:${this.server.info.port},\n            Environment: ${process.env.NODE_ENV||"development"}\n            `)})}registerPlugins(e){return s(this,void 0,void 0,function*(){return yield Promise.all(e.map(e=>s(this,void 0,void 0,function*(){return yield this.server.register(e)})))})}};l=i([c.Service(),o(0,c.Inject(u.HAPI_SERVER)),o(1,c.Inject(u.HAPI_PLUGINS)),n("design:paramtypes",["function"==typeof(e=void 0!==a.Server&&a.Server)&&e||Object,Object,"function"==typeof(t=void 0!==c.BootstrapLogger&&c.BootstrapLogger)&&t||Object,"function"==typeof(r=void 0!==c.ExitHandlerService&&c.ExitHandlerService)&&r||Object])],l),exports.ServerService=l;
},{"../../hapi.module.config":"hapi.module.config.ts"}],"plugins/hapi.plugin.ts":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,r,n){var i,c=arguments.length,o=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(c<3?i(o):c>3?i(t,r,o):i(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,c){function o(e){try{a(n.next(e))}catch(t){c(t)}}function s(e){try{a(n.throw(e))}catch(t){c(t)}}function a(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,s)}a((n=n.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const i=require("@rxdi/core"),c=require("../services/server/server.service");let o=class{constructor(e){this.server=e}register(){return n(this,void 0,void 0,function*(){return yield this.server.start()})}};o=t([i.Plugin(),r("design:paramtypes",["function"==typeof(e=void 0!==c.ServerService&&c.ServerService)&&e||Object])],o),exports.HapiPlugin=o;
},{"../services/server/server.service":"services/server/server.service.ts"}],"plugins/inert/inert.plugin.ts":[function(require,module,exports) {
"use strict";var e,t,i=this&&this.__decorate||function(e,t,i,r){var n,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(o<3?n(c):o>3?n(t,i,c):n(t,i))||c);return o>3&&c&&Object.defineProperty(t,i,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}},o=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(n,o){function c(e){try{f(r.next(e))}catch(t){o(t)}}function s(e){try{f(r.throw(e))}catch(t){o(t)}}function f(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(c,s)}f((r=r.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const c=require("@rxdi/core"),s=require("../../hapi.module.config"),f=require("hapi"),u=require("inert");let a=class{constructor(e,t){this.server=e,this.config=t}OnInit(){this.register()}register(){return o(this,void 0,void 0,function*(){yield this.registerInertPlugin(),this.config.staticConfig&&this.server.route(this.config.staticConfig)})}registerInertPlugin(){return o(this,void 0,void 0,function*(){yield this.server.register(u)})}};a=i([c.Plugin(),n(0,c.Inject(s.HAPI_SERVER)),n(1,c.Inject(s.HAPI_CONFIG)),r("design:paramtypes",["function"==typeof(e=void 0!==f.Server&&f.Server)&&e||Object,"function"==typeof(t=void 0!==s.HapiConfigModel&&s.HapiConfigModel)&&t||Object])],a),exports.InertPlugin=a;
},{"../../hapi.module.config":"hapi.module.config.ts"}],"services/open/open.service.ts":[function(require,module,exports) {
"use strict";var e,t=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,c=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}},n=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,o){function c(e){try{a(i.next(e))}catch(t){o(t)}}function s(e){try{a(i.throw(e))}catch(t){o(t)}}function a(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(c,s)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("@rxdi/core"),c=require("open"),s=require("../../hapi.module.config"),a=require("hapi");let f=class{constructor(e){this.server=e}openServerPage(){return n(this,void 0,void 0,function*(){yield c(`http://${this.server.info.address}:${this.server.info.port}/public`)})}openGraphQLPage(){return n(this,void 0,void 0,function*(){yield c(`http://${this.server.info.address}:${this.server.info.port}/graphiql`)})}openPage(e){return n(this,void 0,void 0,function*(){yield c(e)})}};f=t([o.Service(),i(0,o.Inject(s.HAPI_SERVER)),r("design:paramtypes",["function"==typeof(e=void 0!==a.Server&&a.Server)&&e||Object])],f),exports.OpenService=f;
},{"../../hapi.module.config":"hapi.module.config.ts"}],"plugins/index.ts":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./hapi.plugin")),e(require("./inert/inert.plugin"));
},{"./hapi.plugin":"plugins/hapi.plugin.ts","./inert/inert.plugin":"plugins/inert/inert.plugin.ts"}],"services/index.ts":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./server/server.service")),e(require("./open/open.service"));
},{"./server/server.service":"services/server/server.service.ts","./open/open.service":"services/open/open.service.ts"}],"main.ts":[function(require,module,exports) {
"use strict";var e,r=this&&this.__decorate||function(e,r,i,o){var t,n=arguments.length,s=n<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,r,i,o);else for(var u=e.length-1;u>=0;u--)(t=e[u])&&(s=(n<3?t(s):n>3?t(r,i,s):t(r,i))||s);return n>3&&s&&Object.defineProperty(r,i,s),s};function i(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0});const o=require("hapi"),t=require("./plugins/hapi.plugin"),n=require("./services/server/server.service"),s=require("@rxdi/core"),u=require("./hapi.module.config"),p=require("./plugins/inert/inert.plugin"),l=require("./services/open/open.service");let c=e=class{static forRoot(r){return(r=Object.assign({},r||new u.HapiConfigModel)).randomPort&&r.hapi.port&&(r.hapi.port=null),{module:e,services:[{provide:u.HAPI_CONFIG,useValue:r||new u.HapiConfigModel},{provide:u.HAPI_SERVER,deps:[u.HAPI_CONFIG],useFactory:e=>(delete e.plugins,new o.Server(e.hapi))},{provide:u.HAPI_PLUGINS,useValue:r.plugins||[]}]}}};c=e=r([s.Module({services:[n.ServerService,l.OpenService],plugins:[t.HapiPlugin,p.InertPlugin]})],c),exports.HapiModule=c,i(require("./hapi.module.config")),i(require("./plugins/index")),i(require("./services/index"));
},{"./plugins/hapi.plugin":"plugins/hapi.plugin.ts","./services/server/server.service":"services/server/server.service.ts","./hapi.module.config":"hapi.module.config.ts","./plugins/inert/inert.plugin":"plugins/inert/inert.plugin.ts","./services/open/open.service":"services/open/open.service.ts","./plugins/index":"plugins/index.ts","./services/index":"services/index.ts"}]},{},["main.ts"], null)
//# sourceMappingURL=/main.js.map