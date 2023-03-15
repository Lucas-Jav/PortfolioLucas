import React from "react";
import HeaderSections from "../../headers/header-sections";
import imgCt from "../../../images/imgSkill.png"
import linkedinImg from "../../../images/linkedin.png"
import emailImg from "../../../images/email.png"
import wppImg from "../../../images/whatsapp.png"
import gitImg from "../../../images/github.png"
import { ButtonsFiles, Imgbg } from "../commons";

const Contract = () => {

    return (
        <div className="container_sections">
            <HeaderSections selection="contract" />
            <div className="shadow"></div>
            <div className="imgBg">
                <Imgbg img={imgCt} />
                <div className="aboutPage">
                    <h1>Contrate me</h1>
                    <p>Caso tenha gostado e ficou interessado em meus serviços, escolha uma opção abaixo para fecharmos contrato.</p>
                    <div className="groupBtn">
                        <ButtonsFiles img={gitImg} file="https://github.com/Lucas-Jav" text="GitHub" target="_blank" />
                        <ButtonsFiles img={linkedinImg} file="https://www.linkedin.com/in/lucas-oliveira-de-amorim-010329206/" text="LinkedIn" target="_blank" />
                        <ButtonsFiles img={emailImg} file="mailto:developer.lucasoliveira@gmail.com" text="Email" target="_blank" />
                        <ButtonsFiles img={wppImg} 
                        file="https://api.whatsapp.com/send/?phone=5534992129901&text=Ol%C3%A1+Lucas%2C+vim+pelo+seu+trabalho+de+desenvolvedor%21&type=phone_number&app_absent=0" 
                        text="Whatsapp" target="_blank" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contract;