import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, {UserCreationAttributes} from './../../models/Users/User';

class UserService
{
    /**
     * Get all users
     *
     * @param {Object} params
     */
    public static async all(params?: {})
    {
        return await User.findAll();
    }

    /**
     * Create a new user
     *
     * @param {UserCreationAttributes} data
     * @returns {Promise <User | null>}
     */
    public static async store(data: UserCreationAttributes): Promise<User | null>
    {
        try {
            const hashedPassword = await bcrypt.hash(data.password, 10);

            data.password = hashedPassword;

            const user = await User.create(data);

            const token = UserService.generateToken(user);

            user.setDataValue('token', token);

            return user;
        } catch (error) {
            console.log('error creating new user: ', error);
            return null;
        }
    }

    /**
     * Generate api token
     *
     * @param {User} user
     * @returns {string}
     */
    private static generateToken(user: User): string
    {
        return jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            <string>process.env.JWT_KEY,
            {
                expiresIn: "30d"
            }
        );
    }
}

export default UserService;
