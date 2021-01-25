import React,{useState} from "react"
import HeroSection from "./Component/HeroSection"
import Toggler from "./Component/Toggler"
import ThemeContext from "./Context/ThemeContext"

function App() {
  const theme = useState("light")
  return (
    <ThemeContext.Provider value={theme}>
        <div>
          <Toggler />
          <HeroSection />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
