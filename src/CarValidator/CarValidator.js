import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).messages({
        "string.pattern.base": "Тільки букви до 20ти символів"
    }),
    price: Joi.number().min(1).max(100000).messages({
        'number.min': 'Мінімальне значення 1', 'number.max': 'Максимальне значення 1000000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).messages({
        'number.min': 'Мінімальне значення 1990',
    })
})

export {carValidator}