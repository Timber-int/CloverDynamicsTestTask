import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import css from './Layout.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {boardTableActions} from "../../store";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {CreateTableModalWindow} from "../CreateTableModalWindow/CreateTableModalWindow";

const Layout = () => {

    const dispatch = useAppDispatch();

    const {typeOfSort, showModalWindow, showCreateTableModalWindow} = useAppSelector(state => state.boardTableReducer);

    return (
        <>
            {showModalWindow ? <ModalWindow/> : <></>}
            {showCreateTableModalWindow ? <CreateTableModalWindow/> : <></>}
            <div className={css.header}>
                <div className={css.title}>React Trello</div>
                <div className={css.menu}>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/boardTables'}>Your board</NavLink>
                    <div
                        onClick={() => dispatch(boardTableActions.setTypeOfSort())}>{typeOfSort ? 'Last' : 'First'}
                    </div>
                </div>

            </div>
            <div className={css.content_container}>
                <div className={css.content}><Outlet/></div>

            </div>
        </>
    );
};

export {Layout};
