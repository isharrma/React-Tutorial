import React from "react";

import "./style.css"

import Navbar from "./Navbar"
import Contact from "./Contact"
import Master from "./Master"
import About from "./About"
import Portfolio from "./Portfolio"
import Footer from "./Footer"

const App = () => {
  return (
      <div>
          <Navbar />
          <Master />
          <Portfolio />
          <About />
          <Contact />
          <Footer />
      </div>
  );
};

export default App;
