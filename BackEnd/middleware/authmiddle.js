import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        // console.log(token);
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized', token });
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        // console.log(req.body);
        req.user = decoded; // Attach user data (id and role) to the request
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token', error: error });
    }
};