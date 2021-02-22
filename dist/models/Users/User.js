"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./../../database"));
const sequelize_1 = require("sequelize");
;
;
class User extends sequelize_1.Model {
}
User.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    firstname: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    lastname: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    sequelize: database_1.default,
    modelName: 'user',
});
exports.default = User;
