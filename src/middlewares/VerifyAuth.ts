import jwt from 'jsonwebtoken';
import {StatusCodes} from 'http-status-codes';
import {Request, Response, NextFunction} from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers['authorization'] ? req.headers['authorization'] : req.headers['Authorization'];

    if (!authorization) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'No token provided.' });
    }

    const parts = authorization.toString().split(' ');
    const token = parts[parts.length - 1];

    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'No token provided.' });
    }

    jwt.verify(token, <string>process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token could not be authenticated.' });
        }

        if (!decoded) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token could not be authenticated.' });
        }

        req.params.userData = JSON.stringify(decoded);

        next();
    });
}
