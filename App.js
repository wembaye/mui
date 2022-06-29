import React from 'react';
import { Routes, Route } from "react-router-dom";
import TableProComponenet from './components/common/TablePro'
import './App.css'
import MainComponent from './components/common/Main';
import {TableInfo} from './constants/constants'
import TableComponent from './components/common/Table'
import { Box } from '@mui/material';

const App = () => {
    return (
        <Box>

            <MainComponent />
                <Routes>
                <Route path="/" element={<TableComponent rows = {TableInfo.rows} columns = {TableInfo.columns} />} />
                <Route path="/tablePro" element={<TableProComponenet />} />
                </Routes>
        </Box>
    );
}

export default App;

