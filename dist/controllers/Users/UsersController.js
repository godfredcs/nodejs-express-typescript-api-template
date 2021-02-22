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
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const services_1 = require("./../../services");
exports.default = {
    /**
     * Get all users
     *
     * @param {Request} req
     * @param {Response} res
     */
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield services_1.UserService.all(req.params);
            return res.status(http_status_codes_1.StatusCodes.OK).json(users);
        });
    },
    /**
     * Store a new user
     *
     * @param {Request} req
     * @param {Response} res
     */
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
            };
            const user = yield services_1.UserService.store(data);
            if (!user) {
                return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
                    error: http_status_codes_1.getReasonPhrase(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                });
            }
            return res.status(http_status_codes_1.StatusCodes.CREATED).json(user);
        });
    },
    /**
     * Get a specified user by id
     *
     * @param {Request} req
     * @param {Response} res
     */
    show(req, res) {
        // Code
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: 'Showed user successfully.'
        });
    },
    /**
     * Update an existing user by id
     *
     * @param {Request} req
     * @param {Response} res
     */
    update(req, res) {
        // Code
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: 'Updated user successfully.'
        });
    },
    /**
     * Delete an existing user by id
     *
     * @param {Request} req
     * @param {Response} res
     */
    destroy(req, res) {
        // Code
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: 'Deleted user successfully.'
        });
    },
};
