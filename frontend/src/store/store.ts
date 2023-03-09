import {combineReducers, configureStore} from "@reduxjs/toolkit";
import boardReducer from "./boardSlice/boardSlice";
import boardTableReducer from "./boardTableSlice/boardTableSlice";

const rootReducer = combineReducers({
    boardReducer,
    boardTableReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
