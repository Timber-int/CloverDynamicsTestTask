"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const errorCode_1 = require("../errorCode");
class ErrorHandler extends Error {
    constructor(message, status = errorCode_1.STATUS.CODE_400) {
        super(message);
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=errorHandler.js.map