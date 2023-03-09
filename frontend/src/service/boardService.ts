import {IBoard, IBoardResponse} from "../interface";
import {axiosService} from "./axiosService";
import {baseURL, urls} from "../config";

export const boardService = {
    getAllBoards: () => axiosService.get<{ boardsData: IBoardResponse[] }>(baseURL + urls.boards).then(value => value.data),
    createBoard: (data: IBoard) => axiosService.post<{ boardData: IBoardResponse }>(baseURL + urls.boards,data).then(value => value.data),
    deleteBoardById: (id: number) => axiosService.delete<{ boardData: IBoardResponse }>(baseURL + urls.boards + '/' + id).then(value => value.data),
}
