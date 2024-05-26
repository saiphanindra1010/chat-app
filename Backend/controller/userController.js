import asyncHandler from 'express-async-handler';
import User from "../models/userModel.js"
import generateToken from './generateToken.js';
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body
    if (!name || !email  || !password) {
        res.status(400)
        throw new Error("please enter all the fields")
    }
    const UserExist = await User.findOne({ email })
    console.log(UserExist)
    if (UserExist) {
        res.status(400)
        throw new Error("user already exist")
    }


    if (UserExist) {
        res.status(400)
        throw new Error("user already exist")
    }
    const user = await User.create({
        name,
        email,
        password,
        pic
    })
    if (user) {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user.id)
        })
    }
})
const authUser = asyncHandler(async (req, res) => {
    const { password, email } = req.body
    if ( !email  || !password) {
        res.status(400)
        throw new Error("please enter all the fields")
    }
    const user = await User.findOne({ email })


    if (user && (await user.matchPassword(password))) {
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user.id)
        })
    }
})
export { registerUser,authUser}