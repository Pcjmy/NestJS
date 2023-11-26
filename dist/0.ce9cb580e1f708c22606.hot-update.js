"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 8:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
var common_1 = __webpack_require__(7);
var user_controller_1 = __webpack_require__(9);
var user_service_1 = __webpack_require__(10);
var typeorm_1 = __webpack_require__(11);
var user_entity_1 = __webpack_require__(12);
var logs_entity_1 = __webpack_require__(13);
var nestjs_pino_1 = __webpack_require__(18);
var path_1 = __webpack_require__(19);
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, logs_entity_1.Logs]),
                nestjs_pino_1.LoggerModule.forRoot({
                    pinoHttp: {
                        transport: {
                            targets: [
                                {
                                    level: 'info',
                                    target: 'pino-pretty',
                                    options: {
                                        colorize: true,
                                    },
                                },
                                {
                                    level: 'info',
                                    target: 'pino-roll',
                                    options: {
                                        file: (0, path_1.join)('logs', 'log.txt'),
                                        frequency: 'daily',
                                        size: '10m',
                                        mkdir: true,
                                    },
                                },
                            ],
                        },
                        // transport:
                        //   process.env.NODE_ENV === 'development'
                        //     ? {
                        //         target: 'pino-pretty',
                        //         options: {
                        //           colorize: true,
                        //         },
                        //       }
                        //     : {
                        //         target: 'pino-roll',
                        //         options: {
                        //           file: 'log.txt',
                        //           frequency: 'daily',
                        //           mkdir: true,
                        //         },
                        //       },
                    },
                }),
            ],
            controllers: [user_controller_1.UserController],
            providers: [user_service_1.UserService],
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8c7f9ba8a779531fb47")
/******/ })();
/******/ 
/******/ }
;