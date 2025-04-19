import { Router } from "express";
import UserController from "../controller/user.controller";

const userRouter = Router();

userRouter.post("/register", UserController.registerUser);
userRouter.post("/login", UserController.loginUser);
userRouter.get("/", UserController.getAllUsers);

export default userRouter;
