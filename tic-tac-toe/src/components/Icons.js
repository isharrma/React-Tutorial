import React from "react"
import {FcLike, FcMusic } from "react-icons/fc"

const Icon = ({name}) =>{
   
    switch(name){
        case "music":
            return <FcMusic className="icon" />;
        case "heart":
            return <FcLike className="icon" />;
        default:
            return "";
    }
};

export default Icon;