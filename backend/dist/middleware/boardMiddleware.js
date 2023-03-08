"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardMiddleware = void 0;
const service_1 = require("../service");
const errorHandler_1 = require("../errorHandler");
const message_1 = require("../message");
const errorCode_1 = require("../errorCode");
class BoardMiddleware {
    async checkIsBoardByTitleExist(req, res, next) {
        try {
            const boardFromDB = await service_1.boardService.getBoardByTitle(req.body.title);
            if (boardFromDB) {
                next(new errorHandler_1.ErrorHandler(message_1.MESSAGE.BOARD_IS_EXIST, errorCode_1.STATUS.CODE_404));
                return;
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
    async checkIsBoardByIdExist(req, res, next) {
        try {
            const boardFromDB = await service_1.boardService.getBoardById(Number(req.params.id));
            if (!boardFromDB) {
                next(new errorHandler_1.ErrorHandler(message_1.MESSAGE.BOARD_IS_NOT_EXIST, errorCode_1.STATUS.CODE_404));
                return;
            }
            req.board = boardFromDB;
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.boardMiddleware = new BoardMiddleware();
//# sourceMappingURL=boardMiddleware.js.map