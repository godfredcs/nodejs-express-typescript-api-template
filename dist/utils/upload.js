"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination(req, file, cb) {
        cb(null, '../../uploads/');
    },
    filename(req, file, cb) {
        cb(null, new Date().getTime() + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
const upload = multer_1.default({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter
});
exports.default = upload;
