import express from 'express';
import { connctDB } from './DB/connection.js';
import userRouter from './src/modules/users/user.router.js'
import  bcrypt from 'bcryptjs';


const app = express();
app.use(express.json());var hash = bcrypt.hashSync('bacon', 8);
connctDB();
app.use('/users',userRouter)

app.listen(3000,()=>{
    console.log("server is running...PORT3000")
})