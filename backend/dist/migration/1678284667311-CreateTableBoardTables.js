"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableBoardTables1678284667311 = void 0;
class CreateTableBoardTables1678284667311 {
    async up(queryRunner) {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS BoardTables (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        boardId INT NOT NULL,
        createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
        deletedAt TIMESTAMP,
        FOREIGN KEY (boardId) REFERENCES Boards (id)
          ON DELETE CASCADE
          ON UPDATE CASCADE
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE IF EXIST BoardTables
        `);
    }
}
exports.CreateTableBoardTables1678284667311 = CreateTableBoardTables1678284667311;
//# sourceMappingURL=1678284667311-CreateTableBoardTables.js.map