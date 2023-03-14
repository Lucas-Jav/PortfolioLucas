import React from "react";
import HeaderSections from "../../headers/header-sections";
import imgCt from "../../../images/imgSkill.png"

const Contract = () => {
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
            <HeaderSections selection="contract"/>
            <div className="shadow"></div>
            <div className="imgBg">
                <Imgbg img={imgCt}/>
                <div className="aboutPage">
                    <h1>Contrate me</h1>
                    <p>Caso tenha gostado e tenha interesse em meus serviços, escolha uma opção abaixo para fecharmos contrato.</p>
                    <div className="groupBtn">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contract;