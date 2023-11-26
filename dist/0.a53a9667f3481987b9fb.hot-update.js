"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 10:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
var common_1 = __webpack_require__(7);
var typeorm_1 = __webpack_require__(11);
var user_entity_1 = __webpack_require__(12);
var typeorm_2 = __webpack_require__(14);
var logs_entity_1 = __webpack_require__(13);
var UserService = /** @class */ (function () {
    function UserService(userRepository, logsRepository) {
        this.userRepository = userRepository;
        this.logsRepository = logsRepository;
    }
    UserService.prototype.findAll = function () {
        return this.userRepository.find();
    };
    UserService.prototype.find = function (username) {
        return this.userRepository.findOne({ where: { username: username } });
    };
    UserService.prototype.findOne = function (id) {
        return this.userRepository.findOne({ where: { id: id } });
    };
    UserService.prototype.create = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var userTmp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.create(user)];
                    case 1:
                        userTmp = _a.sent();
                        return [2 /*return*/, this.userRepository.save(userTmp)];
                }
            });
        });
    };
    UserService.prototype.update = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userRepository.update(id, user)];
            });
        });
    };
    UserService.prototype.remove = function (id) {
        return this.userRepository.delete(id);
    };
    UserService.prototype.findProfile = function (id) {
        return this.userRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                profile: true,
            },
        });
    };
    UserService.prototype.findUserLogs = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, this.logsRepository.find({
                                where: {
                                    user: user,
                                },
                                relations: {
                                    user: true,
                                },
                            })];
                }
            });
        });
    };
    UserService.prototype.findLogsByGroup = function (id) {
        return this.logsRepository.query('SELECT * FROM logs');
        // return this.logsRepository
        //   .createQueryBuilder('logs')
        //   .select('logs.result', 'result')
        //   .addSelect('COUNT("logs.result")', 'count')
        //   .leftJoinAndSelect('logs.user', 'user')
        //   .where('user.id = :id', { id })
        //   .groupBy('logs.result')
        //   .orderBy('result', 'DESC')
        //   .getRawMany();
    };
    var _a, _b;
    UserService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
        __param(1, (0, typeorm_1.InjectRepository)(logs_entity_1.Logs)),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7aaaf23053cbd3b0f3e4")
/******/ })();
/******/ 
/******/ }
;