"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 5:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(6);
const user_module_1 = __webpack_require__(7);
const config_1 = __webpack_require__(16);
const typeorm_1 = __webpack_require__(10);
const config_enum_1 = __webpack_require__(19);
const dotenv = __webpack_require__(20);
const Joi = __webpack_require__(21);
const user_entity_1 = __webpack_require__(11);
const profile_entity_1 = __webpack_require__(15);
const logs_entity_1 = __webpack_require__(12);
const roles_entity_1 = __webpack_require__(14);
const logs_module_1 = __webpack_require__(27);
const envFilePath = `.env.${process.env.NODE_ENV || `development`}`;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath,
                load: [() => dotenv.config({ path: '.env' })],
                validationSchema: Joi.object({
                    NODE_ENV: Joi.string()
                        .valid('development', 'production')
                        .default('development'),
                    DB_PORT: Joi.number().default(3306),
                    DB_HOST: Joi.string().ip(),
                    DB_TYPE: Joi.string().valid('mysql', 'postgres'),
                    DB_DATABASE: Joi.string().required(),
                    DB_USERNAME: Joi.string().required(),
                    DB_PASSWORD: Joi.string().required(),
                    DB_SYNC: Joi.boolean().default(false),
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: configService.get(config_enum_1.ConfigEnum.DB_TYPE),
                    port: configService.get(config_enum_1.ConfigEnum.DB_PORT),
                    username: configService.get(config_enum_1.ConfigEnum.DB_USERNAME),
                    password: configService.get(config_enum_1.ConfigEnum.DB_PASSWORD),
                    database: configService.get(config_enum_1.ConfigEnum.DB_DATABASE),
                    entities: [user_entity_1.User, profile_entity_1.Profile, logs_entity_1.Logs, roles_entity_1.Roles],
                    synchronize: configService.get(config_enum_1.ConfigEnum.DB_SYNC),
                    logging: false,
                }),
            }),
            user_module_1.UserModule,
            logs_module_1.LogsModule,
        ],
        controllers: [],
        providers: [common_1.Logger],
        exports: [common_1.Logger],
    })
], AppModule);


/***/ }),

/***/ 27:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogsModule = void 0;
const common_1 = __webpack_require__(6);
let LogsModule = class LogsModule {
};
exports.LogsModule = LogsModule;
exports.LogsModule = LogsModule = __decorate([
    (0, common_1.Module)({})
], LogsModule);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("057591748cdf2759f9ee")
/******/ })();
/******/ 
/******/ }
;