import { Router } from 'express';
import auth from '../../middleware/auth.js';
import fileUpload from '../../utils/multer.js';
import { getUser,deleteUser,putPic } from './user.controller.js';
import { asyncHandler } from "../../utils/catchError.js";
import validation from '../../middleware/validation.js';
import { deleteUserSchema } from './user.validation.js';

const router = Router();


router.get('/',asyncHandler(getUser));

router.delete('/:id',validation(deleteUserSchema),auth(),asyncHandler(deleteUser));

router.put('/:id', auth(),fileUpload().single('image'),asyncHandler(putPic));

export default router;