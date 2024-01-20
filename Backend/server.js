import express from 'express';
import  {chats}  from './data/data.js';
import dotenv from 'dotenv';
const app=express();
dotenv.config()
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
let PORT=process.env.PORT||5000
app.listen(PORT,() => { console.log(`server started at PORT ${PORT}`)})