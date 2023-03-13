import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "./about.png";
import skillsImg from "./skills.png";
import worksImg from "./works.png";
import contractImg from "./contract.png";

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
                    <img src={aboutImg} alt="sla"></img>
                </button>
                <button onClick={toggleDropdown}>
                    <span id="chevron">
                        ^
                    </span>
                </button>
                <div id="menu" className="menu">
                    <button onClick={toggleDropdown}>
                        <Profiles path="/skills" img={skillsImg} title="Skills"/>
                        <Profiles path="/works" img={worksImg} title="Works"/>
                        <Profiles path="/contract" img={contractImg} title="Contract"/>
                        <Link to="/profiles">Voltar</Link>
                        <Link to="/">Sair</Link>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default DropSearch;