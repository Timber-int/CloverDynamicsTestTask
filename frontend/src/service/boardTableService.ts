import {IBoardTable, IBoardTableResponse} from "../interface";
import {axiosService} from "./axiosService";
import {baseURL, urls} from "../config";
// import {IGetAllBoardTablesData} from "../store";

export const boardTableService = {
    getAllBoardTables: (typeOfSort: boolean) => axiosService.get<{ boardTablesData: IBoardTableResponse[] }>(baseURL + urls.boardTables + '/' + typeOfSort).then(value => value.data),
    createBoardTable: (data: IBoardTable) => axiosService.post<{ boardTableData: IBoardTableResponse }>(baseURL + urls.boardTables, data).then(value => value.data),
    deleteBoardTableById: (id: number) => axiosService.delete<{ boardTableData: IBoardTableResponse }>(baseURL + urls.boardTables + '/' + id).then(value => value.data),
    changeBoardTableNewBoard: (id: number, data: { boardId: number }) => axiosService.put<{ boardTableData: IBoardTableResponse }>(baseURL + urls.boardTables + '/' + id, data).then(value => value.data),

}
