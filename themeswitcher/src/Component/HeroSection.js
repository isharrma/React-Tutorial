import React,{useContext} from "react"

import ThemeContext from "../Context/ThemeContext"
import ColorTheme from "../color"

const HeroSection = () =>{
    const theme = useContext(ThemeContext)[0];
    const currentTheme = ColorTheme[theme];

    return(
        <div style={{
            padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.color}`
        }}>
            <h1>Context API Theme Toggler</h1>
            <button
                style={{
                    backgroundColor: "26ae60",
                    padding:"10px 150px",
                    fontSize:"20px",
                    color:"#FFF",
                    border:`${currentTheme.border}`
                }}>Click Me</button>
        </div>
    )
}

export default HeroSection;