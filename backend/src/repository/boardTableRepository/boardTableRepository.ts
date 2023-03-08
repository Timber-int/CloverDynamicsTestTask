import {DeleteResult, EntityRepository, getManager, Repository, UpdateResult,} from 'typeorm';
import {BoardTable, IBoardTable} from "../../entity";
import {IBoardTableRepository} from "./boardTableRepositoryInterface";

@EntityRepository(BoardTable)
class BoardTableRepository extends Repository<IBoardTableRepository> {
    public async getAllBoardTables(): Promise<IBoardTable[]> {
        return getManager().getRepository(BoardTable).find();
    }

    public async getBoardTableById(id: number): Promise<IBoardTable | undefined> {
        return getManager().getRepository(BoardTable).findOne({id});
    }

    public async deleteBoardTableById(id: number): Promise<DeleteResult> {
        return getManager().getRepository(BoardTable).delete({id});
    }

    public async changeBoardTableNewBoard(id: number, boardId: number): Promise<UpdateResult> {
        return getManager().getRepository(BoardTable).update({id}, {boardId});
    }

    public async createBoardTable(boardTable: IBoardTable): Promise<IBoardTable> {
        return getManager().getRepository(BoardTable).save(boardTable);
    }
}

export const boardTableRepository = new BoardTableRepository();
