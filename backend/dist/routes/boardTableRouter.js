"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardTableRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../controller");
const middleware_1 = require("../middleware");
const validation_1 = require("../validation");
const boardTableMiddleware_1 = require("../middleware/boardTableMiddleware");
const router = (0, express_1.Router)();
router.get('/', controller_1.boardTableController.getAllBoardTables);
router.post('/', (req, res, next) => {
    req.chosenValidationType = validation_1.createBoardTableValidator;
    next();
}, middleware_1.dataValidatorMiddleware.dataValidator, boardTableMiddleware_1.boardTableMiddleware.checkIsBoardByBoardIdExist, controller_1.boardTableController.createBoardTable);
router.put('/:id', (req, res, next) => {
    req.chosenValidationType = validation_1.updateBoardTableValidator;
    next();
}, middleware_1.dataValidatorMiddleware.dataValidator, boardTableMiddleware_1.boardTableMiddleware.checkIsBoardTableByIdExist, boardTableMiddleware_1.boardTableMiddleware.checkIsBoardByBoardIdExist, controller_1.boardTableController.changeBoardTableNewBoard);
router.delete('/:id', boardTableMiddleware_1.boardTableMiddleware.checkIsBoardTableByIdExist, controller_1.boardTableController.deleteBoardTableById);
exports.boardTableRouter = router;
//# sourceMappingURL=boardTableRouter.js.map