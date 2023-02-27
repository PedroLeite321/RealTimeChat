import React from 'react';
import Login from './Routers/LoginApp'
import Register from './Routers/RegisterApp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const DealRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Login/>}></Route>
                <Route path="Register" element={<Register/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default DealRoute;