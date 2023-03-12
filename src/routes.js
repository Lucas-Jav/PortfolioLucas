import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomeScreen from "./screens/home";
import PerfisScreen from "./screens/perfis";

const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path="/profiles" element={<PerfisScreen/>}/>
        </Routes>
    </BrowserRouter>
)

export default Routers;