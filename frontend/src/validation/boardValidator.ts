import Joi from 'joi';

export const createBoardValidator = Joi.object({
    title: Joi.string()
        .min(3)
        .max(255)
        .required()
        .messages({
            'string.empty': '"title" Can not be empty',
            'string.pattern.base': 'Enter only letter min 3 max 255',
        }),
});
