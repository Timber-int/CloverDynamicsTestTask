import {IDefaultValue} from "./defaultValueInterface";
import {IBoardTableResponse} from "./boardTabaleInterface";

export interface IBoard {
    title: string,
}

export interface IBoardResponse extends IBoard, IDefaultValue {

}

export interface IBoardWithItems extends IBoard, IDefaultValue {
    items: IBoardTableResponse[]
}
