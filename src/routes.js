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
            <Route exact path="/profiles/about" element={<AboutScreen/>}/>
            <Route exact path="/profiles/skills" element={<SkillScreen/>}/>
            <Route exact path="/profiles/works" element={<WorksScreen/>}/>
            <Route exact path="/profiles/works/404" element={<NotFound to="/profiles/works" content="Works"/>}/>
            <Route exact path="/profiles/contract" element={<ContractScreen/>}/>
            <Route exact path="/profiles/404" element={<NotFound to="/profiles" content="Profiles"/>}/>
            <Route exact path="/profiles/*" element={<Navigate to="/profiles/404"/>}/>
            <Route exact path="/404" element={<NotFound to="/" content="Home"/>}/>
            <Route exact path="*" element={<Navigate to="/404"/>}/>
        </Routes>
    </BrowserRouter>
)

export default Routers;