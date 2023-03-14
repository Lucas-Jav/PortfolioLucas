import React from "react";
import HeaderSections from "../../headers/header-sections";
import bgimg from "../../../images/imgSkill.png"
import iconGit from "../../../images/github.png"
import iconTime from '../../../images/wakatime.png';

const Skill = () => {
    const ButtonsFiles = (props) => {
        return (
            <a href={props.file} rel={props.file} target={props.target}>
                <img src={props.img} alt="file-icon" loading="lazy"></img>
                {props.text}
            </a>
        )
    }

    const Imgbg = (props) => {
        if (window.screen.width >= 1024) {
            return <img src={props.img} alt="bg" className="bg_img"></img>;
        }
    }


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