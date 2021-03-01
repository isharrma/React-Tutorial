import React, { useContext} from 'react'
import Switch from "react-switch";

import ThemeContext from "../Context/ThemeContext";


const ThemeToggler = () =>{
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return(
        <div>
            <Switch
            onColor="#86d3ff"
            // onHandleColor="#2693e6"
            // handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
            checked= {false}
            onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light");
              }}
            />
        </div>
    );
};

export default ThemeToggler;


