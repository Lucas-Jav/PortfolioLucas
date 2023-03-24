import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../images/about.png";
import skillsImg from "../../../images/skills.png";
import worksImg from "../../../images/works.png";
import contractImg from "../../../images/contract.png";
import voltarImg from "../../../images/voltar.png";
import sairImg from "../../../images/sair.png";

const ContentMenu = () => {
    const years = new Date().getFullYear()

    const Profiles = (props) => {
        return (
            <Link to={props.path} className="profilesGroup">
                <img src={props.img} alt="img-profile"></img>
                <span>{props.title}</span>
            </Link>
        )
    }

    return (
        <div className="menuContentBurguer">
            <h2>Sections:</h2>
            <br></br>
            <div className="profilesBurger">
                <Profiles path="/profiles/about" img={aboutImg} title="About" />
                <Profiles path="/profiles/skills" img={skillsImg} title="Skills" />
                <Profiles path="/profiles/works" img={worksImg} title="Works" />
                <Profiles path="/profiles/contract" img={contractImg} title="Contract" />
                <Profiles path="/profiles" img={voltarImg} title="Voltar"/>
                <Profiles path="/" img={sairImg} title="Sair"/>
            </div>
            <br></br>
            <div className="footer">
                <span>{years} &copy; Lucas Oliveira, Todos Direitos Reservados</span>
            </div>
        </div>
    )
}

export default ContentMenu;