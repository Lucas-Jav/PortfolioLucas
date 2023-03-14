import React from "react";

const ButtonsFiles = (props) => {
    return (
        <a href={props.file} rel={props.file} target={props.target}>
            <img src={props.img} alt="file-icon" loading="lazy"></img>
            {props.text}
        </a>
    )
}

const Imgbg = (props) => {
    if (window.screen.width >= 1024) {
        return <img src={props.img} alt="bg" className="bg_img"></img>;
    }
}

export {ButtonsFiles, Imgbg};