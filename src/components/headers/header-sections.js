import React from "react";
import { Link } from "react-router-dom";
import logoPort from "./logo.png";

const HeaderSections = () => {
    return (
        <header className="header_sections">
            <nav>
                <img src={logoPort} alt="logo"></img>
                <div className="navItems">
                    <Link to="/about" className="active">About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/works">Works</Link>
                    <Link to="/contract">Contract</Link>
                </div>
            </nav>
        </header>
    )
}

export default HeaderSections;