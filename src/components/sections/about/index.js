import React from "react";
import HeaderSections from "../../headers/header-sections";
import imgAbout from "../../../images/imgAbout.png"
import file from "../../../images/cvImg.png"
import carta from "../../../images/cartaImg.png"
import { ButtonsFiles, Imgbg } from "../commons";

const About = () => {
    const years = new Date().getFullYear()

    return (
        <div className="container_sections">
            <HeaderSections selection="about"/>
            <div className="shadow"></div>
            <div className="imgBg">
                <Imgbg img={imgAbout}/>
                <div className="aboutPage">
                    <h1>Sobre Mim</h1>
                    <p>Olá, meu nome é Lucas Oliveira, tenho {years - 2004} anos, sou um desenvolvedor
                        Front-End baseado em Minas Gerais, no Brasil! Posso desenvolver sites responsivos a partir do zero e
                        transformá-los em experiências web modernas e fáceis de usar.
                        Transformar minha criatividade e conhecimento em sites tem sido
                        minha paixão há muito tempo.</p>
                        <p>
                        Fazem dois anos que estudo tecnologia, um
                        curso de Desenvolvedor Full-Stack em andamento faltando apenas 40% para
                        concluir, e neste ano de 2023 dei inicio ao meu Bacharelado em Ciências da Computação.
                        </p>
                    <div className="groupBtn">
                        <ButtonsFiles file="/files/cv.pdf" img={file} text="Cv" target="_blank"/>
                        <ButtonsFiles file="/files/cartadeapresentacao.pdf" img={carta} text="Apresentação" target="_blank"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;