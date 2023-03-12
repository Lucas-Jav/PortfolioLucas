import React from "react";
import { Link } from "react-router-dom";

const FormHome = () => {
    return (
        <section className="sectionHome">
            <div className="formHome">
                <h2>Entrar</h2>
                <div className="group_inputs">
                    <input type="text" value="lucasportfolio@lucas.com"></input>
                    <input type="password" value="quemdescobrirdou2reais"></input>
                </div>
                <Link to="/profiles" className="btn_entrar">Entrar</Link>
                <div className="group_infos">
                    <div className="checkbox">
                        <input type="checkbox" checked></input>
                        <span>Lembre-se de mim</span>
                    </div>
                    <span>Precisa de ajuda?</span>
                </div>
                <div className="more_infos">
                    <p className="p1">Conectar-se agora grátis</p>
                    <p className="p2">Novo por aqui? <span>Bem vindo.</span></p>
                    <p className="p3">Esta página foi criada e desenvolvida por <span>@lucas_oliveira. </span>
                    Espero que goste, e se divirta.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FormHome;