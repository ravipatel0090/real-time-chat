
import { Response, Request } from "express";
import { AuthService } from "../services/auth.service";
import { apiResponse } from "../utils/api.response";

export class AuthController {
    static async register(req: Request, res: Response) {
        const payload = await AuthService.register(req);
        apiResponse(res, payload)
    }

    static async login(req: Request, res: Response) {
        const payload = await AuthService.login(req,res);
        apiResponse(res, payload)
    }
}