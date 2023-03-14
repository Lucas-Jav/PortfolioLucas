import React from "react";
import HeaderSections from "../../headers/header-sections";
import imgWorks from "../../../images/imgAbout.png"
import iconGit from "../../../images/github.png"

const Works = () => {
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
            <HeaderSections selection="works"/>
            <div className="shadow"></div>
            <div className="imgBg">
                <Imgbg img={imgWorks}/>
                
                <div className="aboutPage">
                    <h1>Projetos</h1>
                    <p>Durante esse tempo de aprendizado, desenvolvi projetos 
                        pessoais, e outros em modulos de cursos, utilizando sempre 
                        todo meu conhecimento es melhores tecnicas de desenvolvimento.</p>
                        <span>
                            Projetos no carrosel abaixo...
                        </span>
                    <div className="groupBtn">
                        <ButtonsFiles file="https://github.com/Lucas-Jav" img={iconGit}  text="GitHub" target="_blank"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;