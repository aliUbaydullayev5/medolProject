import React from 'react'
import {Route, Routes} from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import Navbar from "../Components/Navbar";

const Root = () => {
    return(
        <div style={{position: 'relative'}}>
            <Navbar />
            <Routes>
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/market'} element={<div />} />
                <Route path={'/productions'} element={<div />} />
                <Route path={'/service'} element={<div />} />
                <Route path={'/news'} element={<div />} />
                <Route path={'/contact'} element={<div />} />
            </Routes>
        </div>
    )
}

export default Root