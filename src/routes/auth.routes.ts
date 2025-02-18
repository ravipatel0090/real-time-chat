import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { validate } from "../middleware/validation.middleware";
import { login, register } from "../validatios/auth.schema";

const router = Router();

router.post('/register',validate(register),AuthController.register);
router.post('/login',validate(login),AuthController.login);

export default router;