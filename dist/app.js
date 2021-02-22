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
const morgan_1 = __importDefault(require("morgan"));
const dotenv_safe_1 = require("dotenv-safe");
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
// Load .env
dotenv_safe_1.config();
const database_1 = __importDefault(require("./database"));
const config_1 = require("./config");
const app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(config_1.uploadsPath));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});
const routes_1 = require("./routes");
app.get('/', (req, res) => {
    res.status(200).json({ name: 'API' });
});
app.use('/users', routes_1.UsersRoutes);
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.sync();
        if (result) {
            app.listen(process.env.PORT);
            // console.log('this is the result from sequelize sync: ', result);
        }
    }
    catch (error) {
        console.log('this is the error from trying to connect to db: ', error);
    }
}))();
