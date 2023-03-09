import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {boardService, boardTableService} from "../../service";
import {IBoardResponse, IBoardTable, IBoardTableResponse} from "../../interface";
import {CONSTANTS} from "../../constants";

interface IChangeBoardData {
    id: number,
    boardId: number,
}

export const getAllBoardTables = createAsyncThunk(
    'boardTableSlice/getAllBoardTables',
    async (typeOfSort: boolean, {dispatch, rejectWithValue}) => {
        try {
            const data = await boardTableService.getAllBoardTables(typeOfSort);

            return {boardTablesData: data};
        } catch (e) {
            if (axios.isAxiosError(e)) {
                // @ts-ignore
                return rejectWithValue(e.response.data.message);
            }
        }
    }
);
export const createBoardTable = createAsyncThunk(
    'boardTableSlice/createBoardTable',
    async (createTableData: IBoardTable, {dispatch, rejectWithValue}) => {
        try {
            const data = await boardTableService.createBoardTable(createTableData);

            return {boardTableData: data};
        } catch (e) {
            if (axios.isAxiosError(e)) {
                // @ts-ignore
                return rejectWithValue(e.response.data.message);
            }
        }
    }
);
export const deleteBoardTableById = createAsyncThunk(
    'boardTableSlice/deleteBoardTableById',
    async (id: number, {dispatch, rejectWithValue}) => {
        try {
            const data = await boardTableService.deleteBoardTableById(id);

            dispatch(boardTableActions.deleteBoardTable({boardTableData: data.boardTableData}));

            return {boardTableData: data};
        } catch (e) {
            if (axios.isAxiosError(e)) {
                // @ts-ignore
                return rejectWithValue(e.response.data.message);
            }
        }
    }
);

export const changeBoardTableNewBoardById = createAsyncThunk(
    'boardTableSlice/changeBoardTableNewBoardById',
    async (changeBoardData: IChangeBoardData, {dispatch, rejectWithValue}) => {
        try {
            const data = await boardTableService.changeBoardTableNewBoard(changeBoardData.id, {boardId: changeBoardData.boardId});

            dispatch(boardTableActions.changeBoard({boardTableData: data.boardTableData}));

            return {boardTableData: data};
        } catch (e) {
            if (axios.isAxiosError(e)) {
                // @ts-ignore
                return rejectWithValue(e.response.data.message);
            }
        }
    }
);

type BoardTableInitialState = {
    boardTables: IBoardTableResponse[],
    status: null | string,
    serverErrors: null | AxiosError | string,
    typeOfSort: boolean,
    showModalWindow: boolean,
    showCreateTableModalWindow: boolean,
    boardTableDataToDelete: IBoardTableResponse | null,
    boardDataForCreateTable: IBoardResponse | null,
    currentBoard: IBoardResponse | null,
    currentItem: IBoardTableResponse | null,
}

const initialState: BoardTableInitialState = {
    boardTables: [],
    status: null,
    serverErrors: null,
    typeOfSort: false,
    showModalWindow: false,
    showCreateTableModalWindow: false,
    boardTableDataToDelete: null,
    boardDataForCreateTable: null,
    currentBoard: null,
    currentItem: null,
}

export const boardTableSlice = createSlice({
    name: 'boardTableSlice',
    initialState,
    reducers: {
        setTypeOfSort: (state, action: PayloadAction<void>) => {
            state.typeOfSort = !state.typeOfSort;
        },
        setCurrentBoard: (state, action: PayloadAction<{ board: IBoardResponse }>) => {
            state.currentBoard = action.payload.board;
        },
        setCurrentItem: (state, action: PayloadAction<{ boardTable: IBoardTableResponse }>) => {
            state.currentItem = action.payload.boardTable;
        },
        deleteBoardTable: (state, action: PayloadAction<{ boardTableData: IBoardTableResponse }>) => {
            state.boardTables = state.boardTables.filter(boardTable => boardTable.id !== action.payload.boardTableData.id);
        },
        setShowModalWindow: (state, action: PayloadAction<void>) => {
            state.showModalWindow = !state.showModalWindow;
        },
        setShowCreateTableModalWindow: (state, action: PayloadAction<void>) => {
            state.showCreateTableModalWindow = !state.showCreateTableModalWindow;
        },
        setBoardTableDataToDeleteNull: (state, action: PayloadAction<void>) => {
            state.boardTableDataToDelete = null;
        },
        setBoardTableDataToDelete: (state, action: PayloadAction<{ boardTable: IBoardTableResponse }>) => {
            state.boardTableDataToDelete = action.payload.boardTable;
        },

        setBoardDataForCreateTableNull: (state, action: PayloadAction<void>) => {
            state.boardDataForCreateTable = null;
        },
        setBoardDataForCreateTable: (state, action: PayloadAction<{ board: IBoardResponse }>) => {
            state.boardDataForCreateTable = action.payload.board;
        },

        changeBoard: (state, action: PayloadAction<{ boardTableData: IBoardTableResponse }>) => {
            const updatedBoardTable = action.payload.boardTableData;
            state.boardTables = state.boardTables.map(boardTable => boardTable.id === updatedBoardTable.id ? updatedBoardTable : boardTable)
        },

    },
    extraReducers: builder => {
        builder.addCase(getAllBoardTables.pending, (state, action) => {
                state.status = CONSTANTS.LOADING;
                state.serverErrors = null;
            }
        )
        builder.addCase(getAllBoardTables.fulfilled, (state, action) => {
                state.status = CONSTANTS.RESOLVED;
                if (action.payload) {
                    state.boardTables = action.payload.boardTablesData.boardTablesData;
                }
                state.serverErrors = null;
            }
        )
        builder.addCase(getAllBoardTables.rejected, (state, action) => {
                state.status = CONSTANTS.REJECTED;
                state.serverErrors = action.payload as string;
            }
        )
        builder.addCase(createBoardTable.pending, (state, action) => {
                state.status = CONSTANTS.LOADING;
                state.serverErrors = null;
            }
        )
        builder.addCase(createBoardTable.fulfilled, (state, action) => {
                state.status = CONSTANTS.RESOLVED;
                if (action.payload) {
                    state.boardTables.push(action.payload.boardTableData.boardTableData);
                }
                state.serverErrors = null;
            }
        )
        builder.addCase(createBoardTable.rejected, (state, action) => {
                state.status = CONSTANTS.REJECTED;
                state.serverErrors = action.payload as string;
            }
        )

        builder.addCase(deleteBoardTableById.pending, (state, action) => {
                state.status = CONSTANTS.LOADING;
                state.serverErrors = null;
            }
        )
        builder.addCase(deleteBoardTableById.fulfilled, (state, action) => {
                state.status = CONSTANTS.RESOLVED;
                state.serverErrors = null;
            }
        )
        builder.addCase(deleteBoardTableById.rejected, (state, action) => {
                state.status = CONSTANTS.REJECTED;
                state.serverErrors = action.payload as string;
            }
        )
    }
});

const boardTableReducer = boardTableSlice.reducer;
const {
    setTypeOfSort,
    deleteBoardTable,
    setShowModalWindow,
    setBoardTableDataToDeleteNull,
    setBoardTableDataToDelete,
    setShowCreateTableModalWindow,
    setBoardDataForCreateTableNull,
    setBoardDataForCreateTable,
    setCurrentBoard,
    setCurrentItem,
    changeBoard,
} = boardTableSlice.actions;
export const boardTableActions = {
    setTypeOfSort,
    deleteBoardTable,
    setShowModalWindow,
    setBoardTableDataToDeleteNull,
    setBoardTableDataToDelete,
    setShowCreateTableModalWindow,
    setBoardDataForCreateTableNull,
    setBoardDataForCreateTable,
    setCurrentBoard,
    setCurrentItem,
    changeBoard,
};
export default boardTableReducer;
