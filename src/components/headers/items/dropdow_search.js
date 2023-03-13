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
            <button>
                <svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="search-icon">
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#fff"
                        d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 
                    11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 
                    15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 
                    11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 
                    15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 
                    15.8506Z">
                    </path>
                </svg>
            </button>
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
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DropSearch;