import React,{useContext,useState} from "react";

import ThemeContext from "./Context/ThemeContext";
import Hero from "./Components/Hero"


import './App.css';

function App() {
  const themeHook = useState("light");


  return (
    <ThemeContext.Provider value={themeHook}>
      <Hero />  
    </ThemeContext.Provider>    
  );
}

export default App