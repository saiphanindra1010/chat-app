import express from "express";
const router=express.Router();

router.post('/login',authUser)
router.route('/').post((signup)=>{})

export default router