"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("./../../models/Users/User"));
class UserService {
    /**
     * Get all users
     *
     * @param {Object} params
     */
    static all(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_1.default.findAll();
        });
    }
    /**
     * Create a new user
     *
     * @param {UserCreationAttributes} data
     * @returns {Promise <User | null>}
     */
    static store(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedPassword = yield bcrypt_1.default.hash(data.password, 10);
                data.password = hashedPassword;
                const user = yield User_1.default.create(data);
                const token = UserService.generateToken(user);
                user.setDataValue('token', token);
                return user;
            }
            catch (error) {
                console.log('error creating new user: ', error);
                return null;
            }
        });
    }
    /**
     * Generate api token
     *
     * @param {User} user
     * @returns {string}
     */
    static generateToken(user) {
        return jsonwebtoken_1.default.sign({
            id: user.id,
            email: user.email,
        }, process.env.JWT_KEY, {
            expiresIn: "30d"
        });
    }
}
exports.default = UserService;
