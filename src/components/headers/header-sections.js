import React from "react";
import { Link } from "react-router-dom";
import DropSearch from "./items/dropdow_search";
import logoPort from "./logo.png";

const HeaderSections = () => {
    window.onscroll = () => {
        let currentScrrol = window.pageYOffset;

        if (currentScrrol < 1) {
            document.querySelector(".header_sections").style.background = "transparent";
        } else {
            document.querySelector(".header_sections").style.background = "rgb(20, 20, 20)";
        }
    }
    
    return (
        <header className="header_sections">
            <nav>
                <div className="navProfiles">
                    <img src={logoPort} alt="logo"></img>
                    <div className="navItems">
                        <Link to="/about" className="active">About</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/works">Works</Link>
                        <Link to="/contract">Contract</Link>
                    </div>
                </div>

                <DropSearch />
            </nav>
        </header>
    )
}

export default HeaderSections;