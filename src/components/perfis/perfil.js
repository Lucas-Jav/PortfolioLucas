import React from "react";
import CardProfile from "./cards";
import sobreImg from "./about.png";
import skillsImg from "./skills.png";
import worksImg from "./works.png"
import contractImg from "./contract.png";
import { Link } from "react-router-dom";

const Perfis = () => {
    return (
        <div className="container_perfis">
            <div className="header_perfis"></div>
            <section className="section_perfis">
                <div className="content_perfis">
                    <h2>Quem está assistindo?</h2>
                    <div className="group_perfis">
                        <CardProfile to="/about" img={sobreImg} title="About" />
                        <CardProfile to="/skills" img={skillsImg} title="Skills" />
                        <CardProfile to="/works" img={worksImg} title="Works" />
                        <CardProfile to="/contract" img={contractImg} title="Contract" />
                    </div>
                    <Link to="/profiles" className="btn_all">Ver tudo</Link>
                </div>
            </section>
        </div>
    )
}

export default Perfis;