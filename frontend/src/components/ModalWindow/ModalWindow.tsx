import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {boardTableActions, deleteBoardTableById} from '../../store';
import css from './ModalWindow.module.css';

const ModalWindow = () => {

    const dispatch = useAppDispatch();

    const {showModalWindow, boardTableDataToDelete} = useAppSelector(state => state.boardTableReducer);

    const rootClasses = [css.modal_window];

    if (showModalWindow) {
        rootClasses.push(css.active);
    }
    const deleteBoardTableFromBoard = () => {
        if (boardTableDataToDelete) {
            dispatch(deleteBoardTableById(boardTableDataToDelete.id));
            dispatch(boardTableActions.setShowModalWindow());
        }
    }

    const cancelDelete = () => {
        dispatch(boardTableActions.setBoardTableDataToDeleteNull());
        dispatch(boardTableActions.setShowModalWindow());
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => dispatch(boardTableActions.setShowModalWindow())}>
            <div className={css.modal_window_content} onClick={event => event.stopPropagation()}>
                <div className={css.container}>
                    <div className={css.title}>Are you sure?</div>
                    <div className={css.text}>After deleting a task, you can't restore it</div>
                    <div className={css.button_container}>
                        <button className={css.cancel_button} onClick={() => cancelDelete()}>No</button>
                        <button className={css.delete_button} onClick={() => deleteBoardTableFromBoard()}>
                            Yes I'm sure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {ModalWindow};
