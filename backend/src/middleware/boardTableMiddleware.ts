import {NextFunction, Response} from 'express';
import {IRequestExtended} from '../interface';
import {boardService, boardTableService} from '../service';
import {ErrorHandler} from '../errorHandler';
import {MESSAGE} from '../message';
import {STATUS} from '../errorCode';

class BoardTableMiddleware {
    public async checkIsBoardTableByIdExist(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const boardTableFromDB = await boardTableService.getBoardTableById(Number(req.params.id));

            if (!boardTableFromDB) {
                next(new ErrorHandler(MESSAGE.BOARD_TABLE_IS_NOT_EXIST, STATUS.CODE_404));
                return;
            }

            req.boardTable = boardTableFromDB;

            next();
        } catch (e) {
            next(e);
        }
    }

    public async checkIsBoardByBoardIdExist(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const boardFromDB = await boardService.getBoardById(Number(req.body.boardId));

            if (!boardFromDB) {
                next(new ErrorHandler(MESSAGE.BOARD_IS_NOT_EXIST, STATUS.CODE_404));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }


}

export const boardTableMiddleware = new BoardTableMiddleware();
