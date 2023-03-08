import {NextFunction, Response} from 'express';
import {boardService} from '../service';
import {IRequestExtended} from "../interface";

class BoardController {
    public async getAllBoards(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const boards = await boardService.getAllBoards();

            res.json({ boardsData: boards });
        } catch (e) {
            next(e);
        }
    }

    public async deleteBoardById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const board = req.board;

            await boardService.deleteBoardById(Number(req.params.id));

            res.json({ boardData: board });
        } catch (e) {
            next(e);
        }
    }

    public async createBoard(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const board = await boardService.createBoard(req.body);

            res.json({ boardData: board });
        } catch (e) {
            next(e);
        }
    }
}

export const boardController = new BoardController();
