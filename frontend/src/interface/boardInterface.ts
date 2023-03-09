import {IDefaultValue} from "./defaultValueInterface";

export interface IBoard {
    title: string,
}

export interface IBoardResponse extends IBoard, IDefaultValue {

}
