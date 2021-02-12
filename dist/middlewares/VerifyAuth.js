"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_codes_1 = require("http-status-codes");
exports.default = (req, res, next) => {
    const authorization = req.headers['authorization'] ? req.headers['authorization'] : req.headers['Authorization'];
    if (!authorization) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: 'No token provided.' });
    }
    const parts = authorization.toString().split(' ');
    const token = parts[parts.length - 1];
    if (!token) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: 'No token provided.' });
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: 'Token could not be authenticated.' });
        }
        if (!decoded) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: 'Token could not be authenticated.' });
        }
        req.params.userData = JSON.stringify(decoded);
        next();
    });
};
