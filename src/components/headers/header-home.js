import React from "react";
import logo from "./logo.png";

const HeaderHome = () => {
    return (
        <header className="header_home">
            <img src={logo} alt="logo-img" loading="lazy"></img>
        </header>
    )
}

export default HeaderHome;