import React from 'react';
import {boardTableActions, createBoardTable} from "../../store";
import css from './CreateTableModalWindow.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {createBoardTableValidator} from "../../validation";

interface ICreateTableData {
    title: string
}

const CreateTableModalWindow = () => {

    const dispatch = useAppDispatch();

    const {
        showCreateTableModalWindow,
        serverErrors,
        boardDataForCreateTable
    } = useAppSelector(state => state.boardTableReducer);

    const rootClasses = [css.modal_window];

    if (showCreateTableModalWindow) {
        rootClasses.push(css.active);
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<ICreateTableData>({
        resolver: joiResolver(createBoardTableValidator),
        mode: 'onTouched',
    });

    const submit: SubmitHandler<ICreateTableData> = (data: ICreateTableData) => {
        if (boardDataForCreateTable) {
            dispatch(createBoardTable({boardId: boardDataForCreateTable.id, title: data.title}))
            dispatch(boardTableActions.setBoardDataForCreateTableNull());
            dispatch(boardTableActions.setShowCreateTableModalWindow());
            reset();
        }
    }

    const cancelDelete = () => {
        dispatch(boardTableActions.setBoardDataForCreateTableNull());
        dispatch(boardTableActions.setShowCreateTableModalWindow());
        reset();
    }

    return (
        <div className={rootClasses.join(' ')}
             onClick={() => dispatch(boardTableActions.setShowCreateTableModalWindow())}>
            <div className={css.modal_window_content} onClick={event => event.stopPropagation()}>
                <div className={css.container}>
                    <div className={css.title}>What is the task name?</div>
                    <div className={css.form_block}>
                        <form onSubmit={handleSubmit(submit)} className={css.form_container}>
                            {
                                typeof serverErrors === "string" ?
                                    <div className={css.server_errors}>{serverErrors}</div>
                                    :
                                    <div className={css.server_errors}></div>
                            }
                            <div className={css.input_box}>
                                <div className={css.errors_container}>
                                    {errors.title
                                        &&
                                        <span>
                                            {errors.title.message}
                                        </span>
                                    }
                                </div>
                                <input className={css.form_input}
                                       type="text" {...register('title')}
                                       required
                                       placeholder={'Create board'}
                                />
                            </div>
                            <div className={css.submit_container}>
                                <input className={css.submit_input} type="submit" value={'Add task'}/>
                            </div>
                        </form>
                    </div>
                    <div className={css.cancel_container}>
                        <button className={css.cancel} onClick={() => cancelDelete()}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {CreateTableModalWindow};
