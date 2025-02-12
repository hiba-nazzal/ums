import UserModel from "../../../DB/model/user.model.js";
import { sendEmail } from '../../utils/sendEmail.js';
import  bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from "../../utils/AppError.js";

export const register= async(req,res)=>{
    
    const{userName,email,password}=req.body;
   const hashedPassword = bcrypt.hashSync(password ,8);

   await UserModel.create({userName,email,password:hashedPassword})

const html =`<div> <h2> new task </h2> <p> welcom ${userName} </p> </div>`
   await sendEmail(email,"welcom",html);

   return res.status(201).json({message:"success"})
}

export const login= async(req,res,next)=>{
    
    const {email,password}=req.body;

    const user=await UserModel.findOne({
         where:{email:email}
    })
    if(user==null){
         return next(new AppError("invalid email",400));

    }
    const check= await bcrypt.compareSync(password,user.password)

    if(check == false){
         return next(new AppError("invalid password",400));

    }
    const token = jwt.sign({ id: user.id,name:user.userName,role:user.role }, 'hebaShanti');

    return res.status(200).json({message:"success",token});

}