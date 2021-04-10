import React, { useContext ,useState} from "react";
import Switch from "react-switch"

import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {

    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const [checked, setChecked] = useState(false)

    const themesetter = () => {
        setThemeMode(themeMode === "light" ? "dark":"light")
        setChecked(checked === false ? true:false);
    }

    return(
        <div >
            <Switch 
            checked={checked}
             onChange = {themesetter}
            onColor="00CCFF"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
            />
        </div>
    );
}

export default ThemeToggler;

