import {NextFunction, Response} from 'express';
import {IRequestExtended} from '../interface';
import {boardService} from '../service';
import {ErrorHandler} from '../errorHandler';
import {MESSAGE} from '../message';
import {STATUS} from '../errorCode';

class BoardMiddleware {
    public async checkIsBoardByTitleExist(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const boardFromDB = await boardService.getBoardByTitle(req.body.title);

            if (boardFromDB) {
                next(new ErrorHandler(MESSAGE.BOARD_IS_EXIST, STATUS.CODE_404));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }

    public async checkIsBoardByIdExist(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const boardFromDB = await boardService.getBoardById(Number(req.params.id));

            if (!boardFromDB) {
                next(new ErrorHandler(MESSAGE.BOARD_IS_NOT_EXIST, STATUS.CODE_404));
                return;
            }

            req.board = boardFromDB;

            next();
        } catch (e) {
            next(e);
        }
    }


}

export const boardMiddleware = new BoardMiddleware();
