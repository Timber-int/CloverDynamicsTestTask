"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardTableMiddleware = void 0;
const service_1 = require("../service");
const errorHandler_1 = require("../errorHandler");
const message_1 = require("../message");
const errorCode_1 = require("../errorCode");
class BoardTableMiddleware {
    async checkIsBoardTableByIdExist(req, res, next) {
        try {
            const boardTableFromDB = await service_1.boardTableService.getBoardTableById(Number(req.params.id));
            if (!boardTableFromDB) {
                next(new errorHandler_1.ErrorHandler(message_1.MESSAGE.BOARD_TABLE_IS_NOT_EXIST, errorCode_1.STATUS.CODE_404));
                return;
            }
            req.boardTable = boardTableFromDB;
            next();
        }
        catch (e) {
            next(e);
        }
    }
    async checkIsBoardByBoardIdExist(req, res, next) {
        try {
            const boardFromDB = await service_1.boardService.getBoardById(Number(req.body.boardId));
            if (!boardFromDB) {
                next(new errorHandler_1.ErrorHandler(message_1.MESSAGE.BOARD_IS_NOT_EXIST, errorCode_1.STATUS.CODE_404));
                return;
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.boardTableMiddleware = new BoardTableMiddleware();
//# sourceMappingURL=boardTableMiddleware.js.map