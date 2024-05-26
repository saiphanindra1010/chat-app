import express from "express";
const router=express.Router();
import {registerUser,authUser} from "../controller/userController.js";
router.post('/login',authUser)
router.route('/').post(registerUser)

export default router