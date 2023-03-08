import {NextFunction, Response, Router} from 'express';
import {boardTableController} from '../controller';
import {IRequestExtended} from '../interface';
import {dataValidatorMiddleware} from '../middleware';
import {createBoardTableValidator, updateBoardTableValidator} from '../validation';
import {boardTableMiddleware} from "../middleware/boardTableMiddleware";

const router = Router();

router.get('/',
    boardTableController.getAllBoardTables,
);

router.post('/',
    (req: IRequestExtended, res: Response, next: NextFunction) => {
        req.chosenValidationType = createBoardTableValidator;
        next();
    },
    dataValidatorMiddleware.dataValidator,
    boardTableMiddleware.checkIsBoardByBoardIdExist,
    boardTableController.createBoardTable,
);

router.put('/:id',
    (req: IRequestExtended, res: Response, next: NextFunction) => {
        req.chosenValidationType = updateBoardTableValidator;
        next();
    },
    dataValidatorMiddleware.dataValidator,
    boardTableMiddleware.checkIsBoardTableByIdExist,
    boardTableMiddleware.checkIsBoardByBoardIdExist,
    boardTableController.changeBoardTableNewBoard,
);

router.delete('/:id',
    boardTableMiddleware.checkIsBoardTableByIdExist,
    boardTableController.deleteBoardTableById,
);

export const boardTableRouter = router;
