import joi from 'joi'

export const register = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required(),
    firstName:joi.string().required(),
    lastName:joi.string().required().allow(null,''),
});

export const login = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
})
