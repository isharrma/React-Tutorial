import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Context/AppTheme";
import ThemeToggler from "./ThemeToggler";



const Hero = () => {
    const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center",
        height:"100vh"
      }}
    >
     <ThemeToggler />
    </div>
  );
};

export default Hero;
