import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from 'react-router-dom';
import css from './HomePage.module.css';
import {IBoard} from "../../interface";
import {createBoard} from "../../store";
import {createBoardValidator} from "../../validation";
import {useAppDispatch, useAppSelector} from '../../hooks';

const HomePage = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const {serverErrors, status} = useAppSelector(state => state.boardReducer);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<IBoard>({
        resolver: joiResolver(createBoardValidator),
        mode: 'onTouched',
    });

    const submit: SubmitHandler<IBoard> = (data: IBoard) => {
        dispatch(createBoard(data.title));
        reset();
        // navigate('/boardTables', {replace: true});
    }

    return (
        <div className={css.container}>
            <div className={css.information_block}>
                Welcome to this interesting trello
            </div>
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
                        <input className={css.submit_input} type="submit" value={'Create'}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export {HomePage};
