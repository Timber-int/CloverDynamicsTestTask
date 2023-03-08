"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBoardTableValidator = exports.createBoardTableValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createBoardTableValidator = joi_1.default.object({
    title: joi_1.default.string()
        .min(3)
        .max(255)
        .required()
        .messages({
        'string.empty': '"title" Can not be empty',
        'string.pattern.base': 'Enter only letter min 3 max 255',
    }),
    boardId: joi_1.default.number()
        .required()
});
exports.updateBoardTableValidator = joi_1.default.object({
    boardId: joi_1.default.number()
        .required()
});
//# sourceMappingURL=boardTableValidator.js.map