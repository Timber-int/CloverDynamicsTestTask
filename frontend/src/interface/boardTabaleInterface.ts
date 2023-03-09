import {IDefaultValue} from "./defaultValueInterface";

export interface IBoardTable {
    title: string,
    boardId: number,
}

export interface IBoardTableResponse extends IBoardTable, IDefaultValue {
}
