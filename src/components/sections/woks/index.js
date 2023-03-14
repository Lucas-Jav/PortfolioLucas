import React from "react";
import HeaderSections from "../../headers/header-sections";
import imgWorks from "../../../images/imgAbout.png"
import iconGit from "../../../images/github.png"
import { Link } from "react-router-dom";
import imgPoke from '../../../images/pokedeximg.png';
import spaceXimg from "../../../images/spaceXimg.png"
import jdmImg from "../../../images/jdmImg.png"
import calcImg from "../../../images/calcImg.png"
import portLari from "../../../images/portfolio.png"
import euPort from "../../../images/lucasPort.png"
import noneProject from "../../../images/nenhumProj.png"
import file from "../../../images/cvImg.png"
import { ButtonsFiles, Imgbg } from "../commons";

const Works = () => {
    const Item = (props) => {
        return (
            <Link to={props.local} className="carrosel-item" target="_blank">
                <div className="header-carrosel">
                    <img src={props.img} alt="pokedex-img"></img>
                </div>
                <div className="body-carrosel">
                    <h3>{props.title}</h3>
                    <span>{props.description}</span>
                    <button>Ver Projeto</button>
                </div>
            </Link>
        )
    }

    const scroll = (e) => {
        let item = document.querySelector('.carrosel');
        e.preventDefault()

        item.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) {
                item.scrollLeft += 30;
                e.preventDefault();

            }
            else {
                item.scrollLeft -= 30;
                e.preventDefault();
            }
        });
    }



    return (
        <div className="container_sections">
            <HeaderSections selection="works" />
            <div className="shadow"></div>
            <div className="imgBg">
                <Imgbg img={imgWorks} />

                <div className="aboutPage">
                    <h1>Projetos</h1>
                    <p>Durante esse tempo de aprendizado, desenvolvi projetos
                        pessoais, e outros em modulos de cursos, utilizando sempre
                        todo meu conhecimento es melhores tecnicas de desenvolvimento.
                    </p>
                    <p>
                        Possuo experiência freelancer desenvolvendo aplicações responsivas para
                        o portal de notícias Patos Hoje.
                    </p>
                    <span>
                        Projetos no carrosel abaixo...
                    </span>
                    <div className="groupBtn">
                        <ButtonsFiles file="https://github.com/Lucas-Jav?tab=repositories" img={iconGit} text="GitHub" target="_blank" />
                        <ButtonsFiles file="#projetos" img={file} text="Projetos" />
                    </div>
                </div>
            </div>
            <div className="section_carrosel" id="projetos">
                <h1>Projetos:</h1>
                <div className="carrosel" onWheel={scroll}>
                    <Item img={imgPoke} title="Pokedex" description="HTML, CSS, JS, Sass" local="https://pokedexweb23.netlify.app/" />
                    <Item img={spaceXimg} title="SpaceX" description="HTML, CSS, JS" local="https://lucas-jav.github.io/SpaceBit/index.html" />
                    <Item img={jdmImg} title="Jdm cars" description="HTML, CSS, Bootstrap" local="https://lucas-jav.github.io/jdm-cars-page/pages-html/sobre.html" />
                    <Item img={calcImg} title="Calculadora" description="HTML, CSS, JS" local="https://lucas-jav.github.io/calculadora.js/" />
                    <Item img={portLari} title="Freelancer" description="HTML, Sass, Bootstrap" local="https://lucas-jav.github.io/portifolio-larissa/" />
                    <Item img={euPort} title="Portfólio" description="React.js, JS, Sass" local="/" />
                    <Item img={noneProject} title="?" description="???" local="" />
                    <Item img={noneProject} title="?" description="???" local="" />
                    <Item img={noneProject} title="?" description="???" local="" />
                    <Item img={noneProject} title="?" description="???" local="" />
                    <Item img={noneProject} title="?" description="???" local="" />
                    <Item img={noneProject} title="?" description="???" local="" />
                </div>
            </div>
        </div>
    )
}

export default Works;