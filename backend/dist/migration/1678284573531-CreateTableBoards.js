"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableBoards1678284573531 = void 0;
class CreateTableBoards1678284573531 {
    async up(queryRunner) {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS Boards (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL UNIQUE,
        createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
        deletedAt TIMESTAMP
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE IF EXIST Boards
        `);
    }
}
exports.CreateTableBoards1678284573531 = CreateTableBoards1678284573531;
//# sourceMappingURL=1678284573531-CreateTableBoards.js.map