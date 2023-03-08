import {NextFunction, Response, Router} from 'express';
import {boardController} from '../controller';
import {IRequestExtended} from '../interface';
import {boardMiddleware, dataValidatorMiddleware} from '../middleware';
import {createBoardValidator} from '../validation';

const router = Router();

router.get('/',
    boardController.getAllBoards
);

router.post('/',
    (req: IRequestExtended, res: Response, next: NextFunction) => {
        req.chosenValidationType = createBoardValidator;
        next();
    },
    dataValidatorMiddleware.dataValidator,
    boardMiddleware.checkIsBoardByTitleExist,
    boardController.createBoard,
);

router.delete('/:id',
    boardMiddleware.checkIsBoardByIdExist,
    boardController.deleteBoardById,
);

export const boardRouter = router;
