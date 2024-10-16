import jsonwebtoken from 'jsonwebtoken';
import { jwtSecret } from '../config.js';
import {User} from '../models/User.js';

export const genToken = (user) => {
    const token = jsonwebtoken.sign({
        id: user._id,
        email: user.email
    }, jwtSecret, { expiresIn: '1h' });

    return token;
}

export const verifyToken = async (token) => {
    let decoded;
    let user;

    try {
        decoded = jsonwebtoken.verify(token, jwtSecret);
        user = await User.findOne({ email: decoded.email });
    } catch (err) {
        return null;
    }

    return user;
}
