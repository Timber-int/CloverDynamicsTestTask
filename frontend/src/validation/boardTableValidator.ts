import Joi from 'joi';

export const createBoardTableValidator = Joi.object({
    title: Joi.string()
        .min(3)
        .max(255)
        .required()
        .messages({
            'string.empty': '"title" Can not be empty',
            'string.pattern.base': 'Enter only letter min 3 max 255',
        }),
});

export const updateBoardTableValidator = Joi.object({
    boardId: Joi.number()
        .required()
});
