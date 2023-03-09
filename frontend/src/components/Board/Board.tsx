import React, {useEffect} from 'react';
import {IBoardResponse, IBoardTableResponse} from "../../interface";
import css from './Board.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {boardTableActions, changeBoardTableNewBoardById, deleteBoardById, getAllBoardTables} from '../../store';
import {BoardTable} from "../BoardTable/BoardTable";
import {BsFillBucketFill} from "react-icons/bs";
import {BsFillArrowDownSquareFill} from "react-icons/bs";

interface IBoardProps {
    board: IBoardResponse,
}

const Board = ({board}: IBoardProps) => {

    const dispatch = useAppDispatch();

    const {boardTables, typeOfSort, currentItem} = useAppSelector(state => state.boardTableReducer);

    useEffect(() => {
        dispatch(getAllBoardTables(typeOfSort));
    }, [typeOfSort]);

    const openCreateTableWindow = (): void => {
        dispatch(boardTableActions.setShowCreateTableModalWindow());
        dispatch(boardTableActions.setBoardDataForCreateTable({board}));
    }

    const dragOverHandler = (e: any,) => {
        e.preventDefault();
        // if (e.target.className == css.board_table_box) {
        // }
        // e.target.style.boxShadow = '0 1vh 1vh gray';
    }

    const dropBoardHandler = (e: any, board: IBoardResponse,) => {
        e.preventDefault();
        if (currentItem) {
            dispatch(changeBoardTableNewBoardById({id: currentItem.id, boardId: board.id}));
        }

    }

    return (
        <div className={css.board_box}
             onDragOver={e => dragOverHandler(e)}
             onDrop={e => dropBoardHandler(e, board)}
        >
            <div className={css.board}>
                <div className={css.delete_button} onClick={() => dispatch(deleteBoardById(board.id))}>
                    <BsFillBucketFill/>
                </div>
                <div className={css.title}>{board.title}</div>
                <div className={css.create_button} onClick={() => openCreateTableWindow()}><BsFillArrowDownSquareFill/>
                </div>
            </div>
            <div className={css.board_tables_container}>
                {
                    boardTables.filter(boardTable => boardTable.boardId === board.id).map(boardTable => (
                            <BoardTable key={boardTable.id} boardTable={boardTable} board={board}/>
                        )
                    )
                }
            </div>
        </div>
    );
};

export {Board};
