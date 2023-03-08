"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataValidatorMiddleware = void 0;
const errorHandler_1 = require("../errorHandler");
class DataValidatorMiddleware {
    async dataValidator(req, res, next) {
        try {
            const validationType = req.chosenValidationType;
            const { error, value } = validationType.validate(req.body);
            if (error) {
                next(new errorHandler_1.ErrorHandler(error.details[0].message));
                return;
            }
            req.body = value;
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.dataValidatorMiddleware = new DataValidatorMiddleware();
//# sourceMappingURL=dataValidatorMiddleware.js.map