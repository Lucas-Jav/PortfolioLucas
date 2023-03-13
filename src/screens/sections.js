import React from "react";
import About from "../components/sections/about/index";
import Contract from "../components/sections/contract";
import Skill from "../components/sections/skills/index";
import Works from "../components/sections/woks/index";

const AboutScreen = () => {
    return <About/>;
}

const SkillScreen = () => {
    return <Skill/>;
}

const WorksScreen = () => {
    return <Works/>;
}

const ContractScreen = () => {
    return <Contract/>;
}

export {AboutScreen, SkillScreen, WorksScreen, ContractScreen};
