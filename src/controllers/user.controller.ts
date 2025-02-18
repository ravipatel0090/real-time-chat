
import { Response, Request } from "express";
import { apiResponse } from "../utils/api.response";
import { UserService } from "../services/user.service";

export class UserController {
    static async getUserById(req: Request, res: Response) {
        const payload = await UserService.getUserById(req);
        apiResponse(res, payload)
    }
}