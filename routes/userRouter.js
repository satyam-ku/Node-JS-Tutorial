import express from "express";
import { getUsers, postUsers } from "../controllers/userController.js";
import {users} from "../models/userModel.js"
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", postUsers);
export default userRouter;