import React, { Fragment } from "react";
import HeaderHome from "../components/headers/header-home";
import { Link } from "react-router-dom";

const NotFound = (props) => {
    return (
        <Fragment>
            <section className="notFound">
                <HeaderHome/>
                <div>
                    <div>
                        <h1>404</h1>
                        <span>Página não encontrada! :(</span>
                        <Link to={props.to}>{props.content}</Link>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default NotFound;