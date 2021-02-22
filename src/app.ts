import morgan from 'morgan';
import {config} from 'dotenv-safe';
import bodyParser from 'body-parser';
import express, {Request, Response, NextFunction} from 'express';

// Load .env
config();

import sequelize from './database';
import {uploadsPath} from './config';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(uploadsPath));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }

    next();
});

import {UsersRoutes} from './routes';

app.get('/', (req, res) => {
    res.status(200).json({name: 'API'});
});

app.use('/users', UsersRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = {
        status: 404,
        message: 'Not Found.',
    };

    next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500)
        .json({
            error: {
                message: error.message || "Something unexpected occured."
            }
        });
});

(async () => {
    try {
        const result = await sequelize.sync();

        if (result) {
            app.listen(process.env.PORT);
            // console.log('this is the result from sequelize sync: ', result);
        }
    } catch (error) {
        console.log('this is the error from trying to connect to db: ', error);
    }
})();
