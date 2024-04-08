import AppError from "../utils/error.utils.js";
import jwt from 'jsonwebtoken';

const isLoggedIn = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new AppError('Unauthenticated, Please Login', 401));
    }

    try {
        const userDetails = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = userDetails;

        // Setting the cookie within the context of the route handler
        const cookieOptions = {
            secure: true,
            sameSite: 'None',
        };
        res.cookie('token', token, cookieOptions);

        // Continue with the next middleware or route handler
        next();
    } catch (error) {
        return next(new AppError('Invalid or Expired Token', 401));
    }
};


export{
    isLoggedIn
}