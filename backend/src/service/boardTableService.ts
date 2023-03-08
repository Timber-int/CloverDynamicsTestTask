import {DeleteResult, UpdateResult} from "typeorm";
import {boardTableRepository} from "../repository";
import {IBoardTable} from "../entity";

class BoardTableService {
    public async getAllBoardTables(): Promise<IBoardTable[]> {
        return boardTableRepository.getAllBoardTables()
    }

    public async getBoardTableById(id: number): Promise<IBoardTable | undefined> {
        return boardTableRepository.getBoardTableById(id)
    }

    public async deleteBoardTableById(id: number): Promise<DeleteResult> {
        return boardTableRepository.deleteBoardTableById(id)
    }

    public async changeBoardTableNewBoard(id: number, boardId: number): Promise<UpdateResult> {
        return boardTableRepository.changeBoardTableNewBoard(id, boardId)
    }

    public async createBoardTable(boardTable: IBoardTable): Promise<IBoardTable> {
        return boardTableRepository.createBoardTable(boardTable)
    }
}

export const boardTableService = new BoardTableService();
