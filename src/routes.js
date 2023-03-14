import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
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
        </Routes>
    </BrowserRouter>
)

export default Routers;