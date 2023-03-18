import React from "react";
import CardProfile from "./cards";
import sobreImg from "../../images/about.png";
import skillsImg from "../../images/skills.png";
import worksImg from "../../images/works.png"
import contractImg from "../../images/contract.png";
import { Link } from "react-router-dom";

const Perfis = () => {
    return (
        <div className="container_perfis">
            <div className="header_perfis"></div>
            <section className="section_perfis">
                <div className="content_perfis">
                    <h2>Escolha uma seção!</h2>
                    <div className="group_perfis">
                        <CardProfile to="/profiles/about" img={sobreImg} title="About" />
                        <CardProfile to="/profiles/skills" img={skillsImg} title="Skills" />
                        <CardProfile to="/profiles/works" img={worksImg} title="Works" />
                        <CardProfile to="/profiles/contract" img={contractImg} title="Contract" />
                    </div>
                    <Link to="/" className="btn_all">Sair</Link>
                </div>
            </section>
        </div>
    )
}

export default Perfis;
