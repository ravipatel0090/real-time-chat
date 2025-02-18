import { Request, Response, NextFunction } from "express";
import { apiResponse, errorResponse } from "../utils/api.response";
import { verify } from "../utils/jwt";
import User from "../models/user.model";

export const verifyToken = async (request: Request, response: Response, next: NextFunction) => {
    try {
    
        const token = request.cookies?.token;

        if (!token) {
            const errorRes = errorResponse('Please login');
            apiResponse(response, errorRes);
        }

        const verifyToken: any = await verify(token);
        if (!verifyToken) {
            const errorRes = errorResponse('Invalid Token');
            apiResponse(response, errorRes);
        }

        const userDetails = await User.findOne({ where: { id: verifyToken?.id, sessionToken: token } });

        if (!userDetails) {
            const errorRes = errorResponse('Someone is already login so please login again');
            apiResponse(response, errorRes);
        }

        next();
    } catch (error: any) {
        const errorRes = errorResponse(error);
        apiResponse(response, errorRes);
        return
    }
}