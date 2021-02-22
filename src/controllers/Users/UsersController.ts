import {Request, Response} from 'express';
import {StatusCodes, getReasonPhrase} from 'http-status-codes';

import {UserCreationAttributes} from './../../models/Users/User';
import {UserService} from './../../services';

export default {
    /**
     * Get all users
     *
     * @param {Request} req
     * @param {Response} res
     */
    async index(req: Request, res: Response) {
        const users = await UserService.all(req.params);
        return res.status(StatusCodes.OK).json(users);
    },

    /**
     * Store a new user
     *
     * @param {Request} req
     * @param {Response} res
     */
    async store(req: Request, res: Response) {
        const data: UserCreationAttributes = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        };

        const user = await UserService.store(data);

        if (!user) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
            });
        }

        return res.status(StatusCodes.CREATED).json(user);
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
