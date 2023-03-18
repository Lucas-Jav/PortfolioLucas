import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DropSearch from "./items/dropdow_search";
import ContentMenu from "./items/menuBgContent";
import logoPort from "./logo.png";

const HeaderSections = (props) => {

    window.onscroll = () => {
        let currentScrrol = window.pageYOffset;
        
        if (currentScrrol < 1) {
            document.querySelector(".header_sections").style.background = "transparent";
        } else {
            document.querySelector(".header_sections").style.background = "rgb(20, 20, 20)";
        }
    }

    const NavItems = (props) => {
        if (window.screen.width >= 768) {
            
            if (props.selection === "about") {
                return (
                    <div className="navItems">
                        <Link to="/profiles/about" className="active">About</Link>
                        <Link to="/profiles/skills">Skills</Link>
                        <Link to="/profiles/works">Works</Link>
                        <Link to="/profiles/contract">Contract</Link>
                    </div>
                )
            } else if (props.selection === "skills") {
                return (
                    <div className="navItems">
                        <Link to="/profiles/about">About</Link>
                        <Link to="/profiles/skills" className="active">Skills</Link>
                        <Link to="/profiles/works">Works</Link>
                        <Link to="/profiles/contract">Contract</Link>
                    </div>
                )
            } else if (props.selection === "works") {
                return (
                    <div className="navItems">
                        <Link to="/profiles/about">About</Link>
                        <Link to="/profiles/skills">Skills</Link>
                        <Link to="/profiles/works" className="active">Works</Link>
                        <Link to="/profiles/contract">Contract</Link>
                    </div>
                )
            } else if (props.selection === "contract") {
                return (
                    <div className="navItems">
                        <Link to="/profiles/about">About</Link>
                        <Link to="/profiles/skills">Skills</Link>
                        <Link to="/profiles/works">Works</Link>
                        <Link to="/profiles/contract" className="active">Contract</Link>
                    </div>
                )
            }
            
        }
    }


    const MenuBar = () => {
        const openMenu = () => {
            const menu = document.querySelector('.menuContentBurguer');
            const burger = document.querySelector("#burger");
            if (burger.value === "close") {
                menu.classList.add("animationMenu");
                burger.value = "open";
                document.querySelector(".header_sections").style.background = "rgb(20, 20, 20)";
            } else {
                menu.classList.remove("animationMenu");
                menu.classList.add("closeBurger");
                burger.value = "close";

                let currentScrrol = window.pageYOffset;
                    
                if (currentScrrol === 0) {
                    document.querySelector(".header_sections").style.background = "transparent";
                }

                setTimeout(() => {
                    menu.classList.remove("closeBurger");
                }, 500);
            }
        }

        if (window.screen.width >= 768) {
            return <DropSearch />
        } else {
            return (
                <label for="burger" className="burger">
                    <input id="burger" type="button" onClick={openMenu} value="close"></input>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            )
        }
    }

    return (
        <Fragment>
            <header className="header_sections">
                <nav>
                    <div className="navProfiles">
                        <img src={logoPort} alt="logo"></img>
                        <NavItems selection={props.selection}/>
                    </div>
                    <MenuBar />
                </nav>
            </header>
            <ContentMenu/>
        </Fragment>
    )
}

export default HeaderSections;