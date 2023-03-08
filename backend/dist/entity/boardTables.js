"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardTable = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants");
const defaultValue_1 = require("./defaultValue");
const boards_1 = require("./boards");
let BoardTable = class BoardTable extends defaultValue_1.DefaultValue {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], BoardTable.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", Number)
], BoardTable.prototype, "boardId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => boards_1.Board, (Board) => Board.tables),
    (0, typeorm_1.JoinColumn)({ name: 'boardId' }),
    __metadata("design:type", boards_1.Board)
], BoardTable.prototype, "board", void 0);
BoardTable = __decorate([
    (0, typeorm_1.Entity)('boardtables', { database: constants_1.CONSTANTS.DATA_BASE })
], BoardTable);
exports.BoardTable = BoardTable;
//# sourceMappingURL=boardTables.js.map