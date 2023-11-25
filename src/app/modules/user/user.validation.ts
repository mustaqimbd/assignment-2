import Joi from "joi";

const order = Joi.object({
    productName: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
}).required()

const fullName = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
}).required()

const address = Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
}).required()

const userDataValidation = Joi.object({
    userId: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    fullName: fullName,
    age: Joi.number().required(),
    email: Joi.string().email().required(),
    isActive: Joi.boolean().required(),
    hobbies: Joi.array().items(Joi.string()).required(),
    address: address,
    orders: Joi.array().items(order),
});

export default userDataValidation;
