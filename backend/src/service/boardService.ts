import {DeleteResult,} from 'typeorm';
import {IBoard} from '../entity';
import {boardRepository} from "../repository";

class BoardService {
    public async getAllBoards(): Promise<IBoard[]> {
        return boardRepository.getAllBoards();
    }

    public async getBoardById(id: number): Promise<IBoard | undefined> {
        return boardRepository.getBoardById(id);
    }

    public async getBoardByTitle(title: string): Promise<IBoard | undefined> {
        return boardRepository.getBoardByTitle(title);
    }

    public async deleteBoardById(id: number): Promise<DeleteResult> {
        return boardRepository.deleteBoardById(id);
    }

    public async createBoard(board: IBoard): Promise<IBoard> {
        return boardRepository.createBoard(board);
    }
}

export const boardService = new BoardService();
