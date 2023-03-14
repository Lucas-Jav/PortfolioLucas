import React from "react";
import HeaderSections from "../../headers/header-sections";
import bgimg from "../../../images/imgSkill.png"
import iconGit from "../../../images/github.png"
import iconTime from '../../../images/wakatime.png';
import { ButtonsFiles, Imgbg } from "../commons";

const Skill = () => {

    return (
        <div className="container_sections">
            <HeaderSections selection="skills"/>
            <div className="shadow"></div>
            <div className="imgBg">
                <Imgbg img={bgimg}/>
                <div className="aboutPage">
                    <h1>Habilidades</h1>
                    <p>Durante minha caminhada desenvolvi habilidades com diversas linguagens de programação e 
                        marcação de hipertexto, porém as tecnologias que tive um melhor resultado são as apresentadas no campo abaixo.</p>
                        <span>
                            HTML, CSS, JavaScript, React.js, Sass, Git & GitHub, NPM, Bootstrap...
                        </span>
                    <div className="groupBtn">
                        <ButtonsFiles file="https://github.com/Lucas-Jav" img={iconGit}  text="GitHub" target="_blank"/>
                        <ButtonsFiles file="https://wakatime.com/@Luk1" img={iconTime} text="Wakatime" target="_blank"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;