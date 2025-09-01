import jwt from 'jsonwebtoken';
import { ApiResponse } from '../utils/ApiResponse.js';

const isLoggedIn = async (req, res, next) => {
	const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
	if (token) {
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = decoded;
            return next();
        } catch (error) {
            return res.status(401).json(new ApiResponse(401, null, 'You are not logged in'));
        }
	}
  	return res.status(401).json(new ApiResponse(401, null, 'You are not logged in'));
};

export { isLoggedIn };