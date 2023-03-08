"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardService = void 0;
const repository_1 = require("../repository");
class BoardService {
    async getAllBoards() {
        return repository_1.boardRepository.getAllBoards();
    }
    async getBoardById(id) {
        return repository_1.boardRepository.getBoardById(id);
    }
    async getBoardByTitle(title) {
        return repository_1.boardRepository.getBoardByTitle(title);
    }
    async deleteBoardById(id) {
        return repository_1.boardRepository.deleteBoardById(id);
    }
    async createBoard(board) {
        return repository_1.boardRepository.createBoard(board);
    }
}
exports.boardService = new BoardService();
//# sourceMappingURL=boardService.js.map