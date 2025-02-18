import { NextFunction, Request, Response } from "express";
import { apiResponse, errorResponse } from "../utils/api.response";

export const validate = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const details = await schema.validate(req.body, { abortEarly: false });
        if (details.error) {
            const response = errorResponse(details?.error?.details);
            apiResponse(res, response);
            return
        }
        next()
    } catch (error: any) {
        const response = errorResponse(error);
        apiResponse(res, response)
    }
}