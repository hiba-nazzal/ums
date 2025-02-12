import express from 'express';
import  bcrypt from 'bcryptjs';
import fileUpload from './src/utils/multer.js';
import blogModel from './DB/model/blog.model.js';
import initApp from './src/index.router.js';


const app = express();

fileUpload();

initApp(app,express);

app.listen(3001,()=>{
    console.log("server is running...")
})