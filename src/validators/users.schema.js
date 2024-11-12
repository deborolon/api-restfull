import Joi from 'joi'

export const userValidation = (usr) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        age: Joi.number().integer().required(),
        email: Joi.string().email({ minDomainSegments: 2}).required(),
        username: Joi.string().alphanum().min(3).max(10).required()
    })

    const { error } = schema.validate(usr)
    const result = error ? error : true
    return result
}