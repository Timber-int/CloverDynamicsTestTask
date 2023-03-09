"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardTableService = void 0;
const repository_1 = require("../repository");
class BoardTableService {
    async getAllBoardTables(typeOfSort) {
        return repository_1.boardTableRepository.getAllBoardTables(typeOfSort);
    }
    async getBoardTableById(id) {
        return repository_1.boardTableRepository.getBoardTableById(id);
    }
    async deleteBoardTableById(id) {
        return repository_1.boardTableRepository.deleteBoardTableById(id);
    }
    async changeBoardTableNewBoard(id, boardId) {
        return repository_1.boardTableRepository.changeBoardTableNewBoard(id, boardId);
    }
    async createBoardTable(boardTable) {
        return repository_1.boardTableRepository.createBoardTable(boardTable);
    }
}
exports.boardTableService = new BoardTableService();
//# sourceMappingURL=boardTableService.js.map