import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.model';
import dotenv from 'dotenv';
import { errorResponse, successResponse } from '../utils/api.response';
import { createToken } from '../utils/jwt';

dotenv.config();

export class UserService {
    static async getUserById(request:any){
        try {
            const user =  await User.findOne({where:{id:request.params.id}})
            return successResponse(user)
        } catch (error:any) {
            return errorResponse(error?.message!,error?.code! || 400)
        }
    }
}