import React, {useEffect} from 'react';
import { Board } from '../../components';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllBoards} from "../../store";
import css from './BoardTablesPage.module.css';

const BoardTablesPage = () => {

    const dispatch = useAppDispatch();

    const {boards} = useAppSelector(state => state.boardReducer);

    useEffect(() => {
        dispatch(getAllBoards());
    }, []);

    return (
        <div className={css.boards_container}>
            {
                boards.map(board=><Board key={board.id} board={board}/>)
            }
        </div>
    );
};

export {BoardTablesPage};
