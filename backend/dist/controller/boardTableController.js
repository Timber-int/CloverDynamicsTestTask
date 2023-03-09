"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardTableController = void 0;
const service_1 = require("../service");
class BoardTableController {
    async getAllBoardTables(req, res, next) {
        try {
            const { typeOfSort } = req.params;
            const boardTables = await service_1.boardTableService.getAllBoardTables(typeOfSort);
            res.json({ boardTablesData: boardTables });
        }
        catch (e) {
            next(e);
        }
    }
    async deleteBoardTableById(req, res, next) {
        try {
            const boardTable = req.boardTable;
            await service_1.boardTableService.deleteBoardTableById(Number(req.params.id));
            res.json({ boardTableData: boardTable });
        }
        catch (e) {
            next(e);
        }
    }
    async createBoardTable(req, res, next) {
        try {
            const boardTable = await service_1.boardTableService.createBoardTable(req.body);
            res.json({ boardTableData: boardTable });
        }
        catch (e) {
            next(e);
        }
    }
    async changeBoardTableNewBoard(req, res, next) {
        try {
            const { boardId } = req.body;
            await service_1.boardTableService.changeBoardTableNewBoard(Number(req.params.id), boardId);
            const boardTable = await service_1.boardTableService.getBoardTableById(Number(req.params.id));
            res.json({ boardTableData: boardTable });
        }
        catch (e) {
            next(e);
        }
    }
}
exports.boardTableController = new BoardTableController();
//# sourceMappingURL=boardTableController.js.map