import UserModel from "../../../DB/model/user.model.js";
import blogModel from "../../../DB/model/blog.model.js";
import { AppError } from "../../utils/AppError.js";

export const getBlog= async(req,res)=>{
    const blog = await blogModel.findAll({
        attributes:['id','title'],
        include:{
            model:UserModel,
            attributes:['id','userName']
        }
    });
    return res.status(200).json({message:"success",blog})
}

export const getDetails= async(req,res,next)=>{
    const{id}=req.params;
    const blog=await blogModel.findByPk(id);
    if(blog == null){
        return next( new AppError("invalid blog",400));
    }
    return res.status(200).json({message:"success",blog})
}

export const createBlog = async(req,res)=>{
    const{title,description}=req.body;
    const blog = await blogModel.create({title,description,UserId:req.id})
    return res.status(200).json({message:"success",blog})
}
