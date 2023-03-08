import {DeleteResult, EntityRepository, getManager, Repository,} from 'typeorm';
import {IBoardRepository} from "./boardRepositoryInterface";
import {Board, IBoard} from "../../entity";

@EntityRepository(Board)
class BoardRepository extends Repository<IBoardRepository> {
    public async getAllBoards(): Promise<IBoard[]> {
        return getManager().getRepository(Board).find();
    }

    public async getBoardById(id: number): Promise<IBoard | undefined> {
        return getManager().getRepository(Board).findOne({ id });
    }

    public async getBoardByTitle(title: string): Promise<IBoard | undefined> {
        return getManager().getRepository(Board).findOne({ title });
    }

    public async deleteBoardById(id: number): Promise<DeleteResult> {
        return getManager().getRepository(Board).delete({ id });
    }

    public async createBoard(board: IBoard): Promise<IBoard> {
        return getManager().getRepository(Board).save(board);
    }
}

export const boardRepository = new BoardRepository();
