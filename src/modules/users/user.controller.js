import UserModel from "../../../DB/model/user.model.js";
import { sendEmail } from '../../utils/sendEmail.js';
import cloudinary from '../../utils/cloudinary.js';
import { AppError } from "../../utils/AppError.js";

export const getUser= async(req,res)=>{
  
 
    const users =await UserModel.findAll({
         attributes:['id','userName','email']
    })
    sendEmail();
    
     return res.status(200).json({message:"success",users})
   
 }

export const deleteUser= async(req,res,next)=>{
 
    const{id}=req.params;
   
    const user=await UserModel.findByPk(id)
    if(user==null){
      return next(new AppError("user not found",400))
      
    }
    await UserModel.destroy({
      where:{id}
 
    })
    return res.status(200).json({message:"success"})

 } 

export const putPic = async(req,res,next)=>{
        const{id}=req.params;
        
        const user=await UserModel.findByPk(id)
        if(user==null){
          return next(new AppError("user not found",400))
          
        }
            
       const {secure_url}= await cloudinary.uploader.upload(req.file.path);
       user.profilPic = secure_url;
       await user.save();
       return res.status(200).json({message:"success"})
      
 }