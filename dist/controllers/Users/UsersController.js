"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
exports.default = {
    /**
     * Get all users
     *
     * @param {Request} req
     * @param {Response} res
     */
    index(req, res) {
        // Code
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: 'Got users successfully.'
        });
    },
    /**
     * Store a new user
     *
     * @param {Request} req
     * @param {Response} res
     */
    store(req, res) {
        // Code
        return res.status(http_status_codes_1.StatusCodes.CREATED).json({
            message: 'Created user successfully.'
        });
    },
    /**
     * Get a specified user by id
     *
     * @param {Request} req
     * @param {Response} res
     */
    show(req, res) {
        // Code
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: 'Showed user successfully.'
        });
    },
    /**
     * Update an existing user by id
     *
     * @param {Request} req
     * @param {Response} res
     */
    update(req, res) {
        // Code
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: 'Updated user successfully.'
        });
    },
    /**
     * Delete an existing user by id
     *
     * @param {Request} req
     * @param {Response} res
     */
    destroy(req, res) {
        // Code
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            message: 'Deleted user successfully.'
        });
    },
};
