"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardTableRepository = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../../entity");
let BoardTableRepository = class BoardTableRepository extends typeorm_1.Repository {
    async getAllBoardTables() {
        return (0, typeorm_1.getManager)().getRepository(entity_1.BoardTable).find();
    }
    async getBoardTableById(id) {
        return (0, typeorm_1.getManager)().getRepository(entity_1.BoardTable).findOne({ id });
    }
    async deleteBoardTableById(id) {
        return (0, typeorm_1.getManager)().getRepository(entity_1.BoardTable).delete({ id });
    }
    async changeBoardTableNewBoard(id, boardId) {
        return (0, typeorm_1.getManager)().getRepository(entity_1.BoardTable).update({ id }, { boardId });
    }
    async createBoardTable(boardTable) {
        return (0, typeorm_1.getManager)().getRepository(entity_1.BoardTable).save(boardTable);
    }
};
BoardTableRepository = __decorate([
    (0, typeorm_1.EntityRepository)(entity_1.BoardTable)
], BoardTableRepository);
exports.boardTableRepository = new BoardTableRepository();
//# sourceMappingURL=boardTableRepository.js.map