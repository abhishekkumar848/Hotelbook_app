const Joi = require('joi');
const ListingSchema = Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        image: Joi.string(),
        image1: Joi.string(),
        image2:Joi.string(),
        price: Joi.number(),
        discount:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
    }).required()
})