import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';

import {UserService} from './../../services';

export default {
    /**
     * Get all users
     *
     * @param {Request} req
     * @param {Response} res
     */
    index(req: Request, res: Response) {
        // Code
        return res.status(StatusCodes.OK).json({
            message: 'Got users successfully.'
        });
    },

    /**
     * Store a new user
     *
     * @param {Request} req
     * @param {Response} res
     */
    store(req: Request, res: Response) {
        // Code
        return res.status(StatusCodes.CREATED).json({
            message: 'Created user successfully.'
        });
    },

    /**
     * Get a specified user by id
     *
     * @param {Request} req
     * @param {Response} res
     */
    show(req: Request, res: Response) {
        // Code
        return res.status(StatusCodes.OK).json({
            message: 'Showed user successfully.'
        });
    },

    /**
     * Update an existing user by id
     *
     * @param {Request} req
     * @param {Response} res
     */
    update(req: Request, res: Response) {
        // Code
        return res.status(StatusCodes.OK).json({
            message: 'Updated user successfully.'
        });
    },

    /**
     * Delete an existing user by id
     *
     * @param {Request} req
     * @param {Response} res
     */
    destroy(req: Request, res: Response) {
        // Code
        return res.status(StatusCodes.OK).json({
            message: 'Deleted user successfully.'
        });
    },
};
