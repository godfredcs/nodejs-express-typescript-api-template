"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const dotenv_safe_1 = require("dotenv-safe");
const body_parser_1 = __importDefault(require("body-parser"));
// Load .env
dotenv_safe_1.config();
const config_1 = require("./config");
const app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(config_1.publicPath));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});
app.get('/', (req, res) => {
    res.status(200).json({ name: 'API' });
});
app.use((req, res, next) => {
    const error = {
        status: 404,
        message: 'Not Found.',
    };
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({
        error: {
            message: error.message || "Something unexpected occured."
        }
    });
});
app.listen(process.env.PORT);
