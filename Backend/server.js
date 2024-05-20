import express from 'express';
import  {chats}  from './data/data.js';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import connecDB from './DB/db.js';
import UserRouter from './routes/UserRoutes.js';
const app=express();
dotenv.config()
connecDB()
app.get('/',(req,res)=>
{
    res.send("api is workings")
})

app.get('/api/chat',(req,res)=>
{

    res.send(chats)
})
app.get('/api/chat/:id',(req,res)=>
{
    // console.log(req.params.id)
    const singleChat=chats.find((c)=>c._id===req.params.id)
    res.send(singleChat)
})

app.use('/api/user',UserRouter)
let PORT=process.env.PORT||5000
app.listen(PORT,() => { console.log(`server started at PORT ${PORT}`)})