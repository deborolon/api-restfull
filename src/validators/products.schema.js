import Joi from 'joi'

export const prodValidation = (prod) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        price: Joi.number().required(),
        category: Joi.string().min(3).max(20).required(),
        stock: Joi.number().integer().required()
    })

    const { error } = schema.validate(prod)
    const result = error ? error : true
    return result
}