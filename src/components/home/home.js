import React from "react";
import HeaderHome from "../headers/header-home";
import BgImg from "./backgound-img.jpg";
import FormHome from "./form";


const Home = () => {
    return (
        <div className="container_home">
            <img src={BgImg} alt="bg_img" />
            <div className="shadow"></div>
            <HeaderHome/>
            <FormHome/>
        </div>
    )
}

export default Home;