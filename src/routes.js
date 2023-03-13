import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AboutScreen from "./screens/about";
import HomeScreen from "./screens/home";
import PerfisScreen from "./screens/perfis";

const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path="/profiles" element={<PerfisScreen/>}/>
            <Route exact path="/about" element={<AboutScreen/>}/>
        </Routes>
    </BrowserRouter>
)

export default Routers;