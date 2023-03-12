import React from "react";
import { Link } from "react-router-dom";

const CardProfile = (props) => {

    return (
        <Link to={props.to}>
            <img src={props.img} alt="img-profile" loading="lazy"></img>
            <span>{props.title}</span>
        </Link>
    )
}

export default CardProfile;