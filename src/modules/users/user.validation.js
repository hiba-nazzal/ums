import joi from "joi";


export const deleteUserSchema =joi.object({
    id:joi.number().min(1).required()
})