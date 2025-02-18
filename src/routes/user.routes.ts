import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { validate } from "../middleware/validation.middleware";
import { login, register } from "../validatios/auth.schema";
import {verifyToken}  from "../middleware/auth.middleware";

const router = Router();

router.get('/:id',verifyToken,UserController.getUserById)

export default router;