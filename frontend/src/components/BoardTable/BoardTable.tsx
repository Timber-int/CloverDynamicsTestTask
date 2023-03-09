import React from 'react';
import css from './BoardTable.module.css';
import {IBoardTableResponse} from "../../interface";
import {useAppDispatch} from "../../hooks";
import {boardTableActions} from "../../store";
import {BsFillBucketFill} from 'react-icons/bs'

interface IBoardTableProps {
    boardTable: IBoardTableResponse,
}

const BoardTable = ({boardTable}: IBoardTableProps) => {

    const options = {
        weekday: 'long',
        day: 'numeric',
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };

    const data = new Date(boardTable.createdAt);

    let dispatch = useAppDispatch();

    const setBoardTableToDelete = (data: IBoardTableResponse) => {
        dispatch(boardTableActions.setShowModalWindow());
        dispatch(boardTableActions.setBoardTableDataToDelete({boardTable: data}));
    }

    return (
        <div className={css.board_table_box}>
            <div className={css.board_box}>
                <div className={css.delete_button} onClick={() => setBoardTableToDelete(boardTable)}>
                    <BsFillBucketFill/>
                </div>
                <div className={css.title}>{boardTable.title}</div>
                <button>Change</button>
            </div>
            <div className={css.data}>{data.toLocaleDateString("en-RS", options as any)}</div>
        </div>
    );
};

export {BoardTable};
