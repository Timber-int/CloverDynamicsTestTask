import {Router} from 'express';

import {STATUS} from '../errorCode';
import {boardRouter} from "./boardRouter";
import {boardTableRouter} from "./boardTableRouter";

const router = Router();

router.use('/boards', boardRouter);
router.use('/boardTables', boardTableRouter);

// @ts-ignore
router.use('*', (err, req, res, next) => {
    res
        .status(err.status || STATUS.CODE_500)
        .json({
            message: err.message,
            data: err.data,
        });
});

export const apiRouter = router;
