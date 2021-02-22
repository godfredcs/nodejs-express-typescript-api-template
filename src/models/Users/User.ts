import sequelize from './../../database';
import {
    Model,
    Optional,
    DataTypes,
} from 'sequelize';

export interface UserAttributes {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    token?: string;
};

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {};

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    firstname: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    lastname: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'user',
});

export default User;
