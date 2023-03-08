import {NextFunction, Response} from 'express';
import {boardTableService} from '../service';
import {IRequestExtended} from "../interface";

class BoardTableController {
    public async getAllBoardTables(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const boardTables = await boardTableService.getAllBoardTables();

            res.json({boardTablesData: boardTables});
        } catch (e) {
            next(e);
        }
    }

    public async deleteBoardTableById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const boardTable = req.boardTable;

            await boardTableService.deleteBoardTableById(Number(req.params.id));

            res.json({boardTableData: boardTable});
        } catch (e) {
            next(e);
        }
    }

    public async createBoardTable(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const boardTable = await boardTableService.createBoardTable(req.body);

            res.json({boardTableData: boardTable});
        } catch (e) {
            next(e);
        }
    }

    public async changeBoardTableNewBoard(req: IRequestExtended, res: Response, next: NextFunction): Promise<void | Error> {
        try {
            const {boardId} = req.body;
            await boardTableService.changeBoardTableNewBoard(Number(req.params.id), boardId);
            const boardTable = await boardTableService.getBoardTableById(Number(req.params.id));

            res.json({boardTableData: boardTable});
        } catch (e) {
            next(e);
        }
    }
}

export const boardTableController = new BoardTableController();
