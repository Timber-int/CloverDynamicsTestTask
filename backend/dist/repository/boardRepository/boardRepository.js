"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRepository = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../../entity");
let BoardRepository = class BoardRepository extends typeorm_1.Repository {
    async getAllBoards() {
        return (0, typeorm_1.getManager)().getRepository(entity_1.Board).find();
    }
    async getBoardById(id) {
        return (0, typeorm_1.getManager)().getRepository(entity_1.Board).findOne({ id });
    }
    async getBoardByTitle(title) {
        return (0, typeorm_1.getManager)().getRepository(entity_1.Board).findOne({ title });
    }
    async deleteBoardById(id) {
        return (0, typeorm_1.getManager)().getRepository(entity_1.Board).delete({ id });
    }
    async createBoard(board) {
        return (0, typeorm_1.getManager)().getRepository(entity_1.Board).save(board);
    }
};
BoardRepository = __decorate([
    (0, typeorm_1.EntityRepository)(entity_1.Board)
], BoardRepository);
exports.boardRepository = new BoardRepository();
//# sourceMappingURL=boardRepository.js.map