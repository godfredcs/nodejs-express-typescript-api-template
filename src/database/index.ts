import {Sequelize} from 'sequelize';
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const sequelize = new Sequelize(<string>DB_DATABASE, <string>DB_USERNAME, <string>DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
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

(async () => {
    try {
        await sequelize.authenticate()
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }

})();

export default sequelize;
