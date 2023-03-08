import { Request } from 'express';
import {IBoard, IBoardTable} from "../entity";

export interface IRequestExtended extends Request {
    chosenValidationType?: any,
    board?:IBoard,
    boardTable?:IBoardTable,
}
