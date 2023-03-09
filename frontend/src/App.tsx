import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './components';
import {BoardTablesPage, HomePage} from "./pages";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/boardTables'} element={<BoardTablesPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};
