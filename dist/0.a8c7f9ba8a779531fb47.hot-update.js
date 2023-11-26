"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 12:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
var logs_entity_1 = __webpack_require__(13);
var roles_entity_1 = __webpack_require__(15);
var typeorm_1 = __webpack_require__(14);
var profile_entity_1 = __webpack_require__(16);
var User = /** @class */ (function () {
    function User() {
    }
    var _a;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return logs_entity_1.Logs; }, function (logs) { return logs.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "logs", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return roles_entity_1.Roles; }, function (roles) { return roles.users; }),
        (0, typeorm_1.JoinTable)({ name: 'user_roles' }),
        __metadata("design:type", Array)
    ], User.prototype, "roles", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return profile_entity_1.Profile; }, function (profile) { return profile.user; }),
        __metadata("design:type", typeof (_a = typeof profile_entity_1.Profile !== "undefined" && profile_entity_1.Profile) === "function" ? _a : Object)
    ], User.prototype, "profile", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}());
exports.User = User;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8d363c440ab7ec35a0f")
/******/ })();
/******/ 
/******/ }
;