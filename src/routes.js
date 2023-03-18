import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import NotFound from "./screens/404";
import HomeScreen from "./screens/home";
import PerfisScreen from "./screens/perfis";
import { AboutScreen, ContractScreen, SkillScreen, WorksScreen } from "./screens/sections";
const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path="/profiles" element={<PerfisScreen/>}/>
            <Route exact path="/about" element={<AboutScreen/>}/>
            <Route exact path="/skills" element={<SkillScreen/>}/>
            <Route exact path="/works" element={<WorksScreen/>}/>
            <Route exact path="/contract" element={<ContractScreen/>}/>
            <Route exact path="/404" element={<NotFound/>}/>
            <Route exact path="*" element={<Navigate to="/404"/>}/>
        </Routes>
    </BrowserRouter>
)

export default Routers;