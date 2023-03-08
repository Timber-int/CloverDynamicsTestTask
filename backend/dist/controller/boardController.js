"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardController = void 0;
const service_1 = require("../service");
class BoardController {
    async getAllBoards(req, res, next) {
        try {
            const boards = await service_1.boardService.getAllBoards();
            res.json({ boardsData: boards });
        }
        catch (e) {
            next(e);
        }
    }
    async deleteBoardById(req, res, next) {
        try {
            const board = req.board;
            await service_1.boardService.deleteBoardById(Number(req.params.id));
            res.json({ boardData: board });
        }
        catch (e) {
            next(e);
        }
    }
    async createBoard(req, res, next) {
        try {
            const board = await service_1.boardService.createBoard(req.body);
            res.json({ boardData: board });
        }
        catch (e) {
            next(e);
        }
    }
}
exports.boardController = new BoardController();
//# sourceMappingURL=boardController.js.map