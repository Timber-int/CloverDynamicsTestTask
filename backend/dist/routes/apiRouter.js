"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const errorCode_1 = require("../errorCode");
const boardRouter_1 = require("./boardRouter");
const boardTableRouter_1 = require("./boardTableRouter");
const router = (0, express_1.Router)();
router.use('/boards', boardRouter_1.boardRouter);
router.use('/boardTables', boardTableRouter_1.boardTableRouter);
// @ts-ignore
router.use('*', (err, req, res, next) => {
    res
        .status(err.status || errorCode_1.STATUS.CODE_500)
        .json({
        message: err.message,
        data: err.data,
    });
});
exports.apiRouter = router;
//# sourceMappingURL=apiRouter.js.map