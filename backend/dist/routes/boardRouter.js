"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../controller");
const middleware_1 = require("../middleware");
const validation_1 = require("../validation");
const router = (0, express_1.Router)();
router.get('/', controller_1.boardController.getAllBoards);
router.post('/', (req, res, next) => {
    req.chosenValidationType = validation_1.createBoardValidator;
    next();
}, middleware_1.dataValidatorMiddleware.dataValidator, middleware_1.boardMiddleware.checkIsBoardByTitleExist, controller_1.boardController.createBoard);
router.delete('/:id', middleware_1.boardMiddleware.checkIsBoardByIdExist, controller_1.boardController.deleteBoardById);
exports.boardRouter = router;
//# sourceMappingURL=boardRouter.js.map