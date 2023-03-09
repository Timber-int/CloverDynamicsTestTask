import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {boardService} from "../../service";
import {IBoardResponse} from "../../interface";
import {CONSTANTS} from "../../constants";

export const getAllBoards = createAsyncThunk(
    'boardSlice/getAllBoards',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const data = await boardService.getAllBoards();

            return {boardsData: data};
        } catch (e) {
            if (axios.isAxiosError(e)) {
                // @ts-ignore
                return rejectWithValue(e.response.data.message);
            }
        }
    }
);
export const createBoard = createAsyncThunk(
    'boardSlice/createBoard',
    async (title: string, {dispatch, rejectWithValue}) => {
        try {
            const data = await boardService.createBoard({title});

            return {boardData: data};
        } catch (e) {
            if (axios.isAxiosError(e)) {
                // @ts-ignore
                return rejectWithValue(e.response.data.message);
            }
        }
    }
);
export const deleteBoardById = createAsyncThunk(
    'boardSlice/deleteBoardById',
    async (id: number, {dispatch, rejectWithValue}) => {
        try {
            const data = await boardService.deleteBoardById(id);

            dispatch(boardActions.deleteBoard({boardData: data.boardData}));

            return {boardData: data};
        } catch (e) {
            if (axios.isAxiosError(e)) {
                // @ts-ignore
                return rejectWithValue(e.response.data.message);
            }
        }
    }
);

type BoardInitialState = {
    boards: IBoardResponse[],
    status: null | string,
    serverErrors: null | AxiosError | string,
}

const initialState: BoardInitialState = {
    boards: [],
    status: null,
    serverErrors: null,
}

export const boardSlice = createSlice({
    name: 'boardSlice',
    initialState,
    reducers: {
        deleteBoard: (state, action: PayloadAction<{ boardData: IBoardResponse }>) => {
            state.boards = state.boards.filter(board => board.id !== action.payload.boardData.id);
        }
    },
    extraReducers: builder => {
        builder.addCase(getAllBoards.pending, (state, action) => {
                state.status = CONSTANTS.LOADING;
                state.serverErrors = null;
            }
        )
        builder.addCase(getAllBoards.fulfilled, (state, action) => {
                state.status = CONSTANTS.RESOLVED;
                if (action.payload) {
                    state.boards = action.payload.boardsData.boardsData;
                }
                state.serverErrors = null;
            }
        )
        builder.addCase(getAllBoards.rejected, (state, action) => {
                state.status = CONSTANTS.REJECTED;
                state.serverErrors = action.payload as string;
            }
        )
        builder.addCase(createBoard.pending, (state, action) => {
                state.status = CONSTANTS.LOADING;
                state.serverErrors = null;
            }
        )
        builder.addCase(createBoard.fulfilled, (state, action) => {
                state.status = CONSTANTS.RESOLVED;
                if (action.payload) {
                    state.boards.push(action.payload.boardData.boardData);
                }
                state.serverErrors = null;
            }
        )
        builder.addCase(createBoard.rejected, (state, action) => {
                state.status = CONSTANTS.REJECTED;
                state.serverErrors = action.payload as string;
            }
        )
        builder.addCase(deleteBoardById.pending, (state, action) => {
                state.status = CONSTANTS.LOADING;
                state.serverErrors = null;
            }
        )
        builder.addCase(deleteBoardById.fulfilled, (state, action) => {
                state.status = CONSTANTS.RESOLVED;
                state.serverErrors = null;
            }
        )
        builder.addCase(deleteBoardById.rejected, (state, action) => {
                state.status = CONSTANTS.REJECTED;
                state.serverErrors = action.payload as string;
            }
        )
    }
});

const boardReducer = boardSlice.reducer;
const {deleteBoard} = boardSlice.actions;
export const boardActions = {deleteBoard};
export default boardReducer;
