import React, {useState} from 'react';
import css from './BoardTable.module.css';
import {IBoard, IBoardResponse, IBoardTableResponse} from "../../interface";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {boardTableActions, changeBoardTableNewBoardById} from "../../store";
import {BsFillBucketFill} from 'react-icons/bs'

interface IBoardTableProps {
    boardTable: IBoardTableResponse,
    board: IBoardResponse
}

const BoardTable = ({boardTable, board}: IBoardTableProps) => {

    const options = {
        weekday: 'long',
        day: 'numeric',
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };

    const data = new Date(boardTable.createdAt);

    const dispatch = useAppDispatch();

    const {boardTables, currentBoard, currentItem} = useAppSelector(state => state.boardTableReducer);

    const setBoardTableToDelete = (data: IBoardTableResponse) => {
        dispatch(boardTableActions.setShowModalWindow());
        dispatch(boardTableActions.setBoardTableDataToDelete({boardTable: data}));
    }

    const dragOverHandler = (e: any,) => {
        e.preventDefault();
        if (e.target.className == css.board_table_box) {
        }
        e.target.style.boxShadow = '0 1vh 1vh gray';
    }
    const dragLeaveHandler = (e: any,) => {
        e.target.style.boxShadow = 'none';

    }
    const dragStartHandler = (e: any, board: IBoardResponse, item: IBoardTableResponse) => {
        dispatch(boardTableActions.setCurrentBoard({board}))
        dispatch(boardTableActions.setCurrentItem({boardTable:item}))
    }
    const dragEndHandler = (e: any,) => {
        e.target.style.boxShadow = 'none';

    }

    const dropHandler = (e: any, board: IBoardResponse, item: IBoardTableResponse) => {
        e.preventDefault();
        if (currentItem) {
            dispatch(changeBoardTableNewBoardById({id: currentItem.id, boardId: board.id}));
        }

    }

    return (
        <div className={css.board_table_box} draggable={true}
             onDragOver={e => dragOverHandler(e)}
             onDragLeave={e => dragLeaveHandler(e)}
             onDragStart={e => dragStartHandler(e, board, boardTable)}
             onDragEnd={e => dragEndHandler(e)}
             onDrop={e => dropHandler(e, board, boardTable)}

        >
            <div className={css.board_box}>
                <div className={css.delete_button} onClick={() => setBoardTableToDelete(boardTable)}>
                    <BsFillBucketFill/>
                </div>
                <div className={css.title}>{boardTable.title}</div>
            </div>
            <div className={css.data}>{data.toLocaleDateString("en-RS", options as any)}</div>
        </div>
    );
};

export {BoardTable};
