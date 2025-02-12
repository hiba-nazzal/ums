import { connctDB } from '../DB/connection.js';
import userRouter from './modules/users/user.router.js'
import atheRouter from './modules/auth/auth.router.js'
import blogRouter from './modules/blog/blog.router.js'
import { AppError } from './utils/AppError.js';
import cors from 'cors';


const initApp = (app,express)=>{

connctDB();
app.use( cors());
app.use(express.json());
app.use('/users',userRouter)
app.use('/auth',atheRouter)
app.use('/blog',blogRouter)
app.use( (err,req,res,next)=>{
  return res.status(err.statusCode).json({message:err.message});
});

}

export default initApp;