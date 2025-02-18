import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.model';
import dotenv from 'dotenv';
import { errorResponse, successResponse } from '../utils/api.response';
import { createToken } from '../utils/jwt';

dotenv.config();

export class AuthService {
    static async register(request:any){
        try {
            const {email,password,firstName,lastName} = request.body;

            if(!email || !password){
                return errorResponse('Email and Password is required')
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user =  await User.create({email, password: hashedPassword,firstName,lastName});
            return successResponse(user)
        } catch (error:any) {
            return errorResponse(error?.message!,error?.code! || 400)
        }
    }

    static async login(request:any,response:any){
        try {
            const {email,password} = request.body;

            if(!email || !password){
                return errorResponse('Email and Password is required')
            }
            const user = await User.findOne({where:{email}});
            if(!user){
                return errorResponse("Invalid Email!",404)
            }

            const comparePassword = await bcrypt.compare(password,user?.password);
            if(!comparePassword){
                return errorResponse("Invalid Password!",401)
            }

            const token = await createToken(user);
            user.sessionToken = token;
            user.save()
            response.cookie('token',token,{httpOnly:true});
            return successResponse(user,'Login Successfull')
        } catch (error:any) {
            return errorResponse(error?.message!,error?.code! || 400)
        }
    }
}