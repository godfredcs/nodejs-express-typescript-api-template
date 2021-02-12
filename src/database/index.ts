const { DB_HOST, DB_CONNECTION, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_CONNECTION,
    operatorsAliases: false,
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error: any) => {
        console.error('Unable to connect to the database: ', error);
    });

export default sequelize;
