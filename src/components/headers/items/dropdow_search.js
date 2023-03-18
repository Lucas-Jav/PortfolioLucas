import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../images/about.png";
import skillsImg from "../../../images/skills.png";
import worksImg from "../../../images/works.png";
import contractImg from "../../../images/contract.png";
import euImg from "../../../images/eu.png"

const DropSearch = () => {
    const toggleDropdown = () => {
        const menu = document.getElementById("menu"),
            chevron = document.getElementById("chevron");
        chevron.classList.toggle("rotate");
        menu.classList.toggle("open");
        chevron.innerHTML = !menu.classList.contains("open")
            ? "^"
            : "V";
    };

    const Profiles = (props) => {
        return (
            <Link to={props.path} className="profilesGroup">
                <img src={props.img} alt="img-profile"></img>
                <span>{props.title}</span>
            </Link>
        )
    }

    return (
        <div className="oterList">
            <div className="split-button" >
                <button>
                    <img src={euImg} alt="img-eu"></img>
                </button>
                <button onClick={toggleDropdown}>
                    <span id="chevron">
                        ^
                    </span>
                </button>
                <div id="menu" className="menu">
                    <button onClick={toggleDropdown}>
                        <Profiles path="/profiles/about" img={aboutImg} title="About"/>
                        <Profiles path="/profiles/skills" img={skillsImg} title="Skills"/>
                        <Profiles path="/profiles/works" img={worksImg} title="Works"/>
                        <Profiles path="/profiles/contract" img={contractImg} title="Contract"/>
                        <Link to="/profiles">Voltar</Link>
                        <Link to="/">Sair</Link>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default DropSearch;