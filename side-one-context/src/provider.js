import React,{useState} from "react"

import PackageContext from "./context"

const Provider = (props) =>{
    const [mission, setMission] = useState({
        mname: "Go to Mars",
        code: 123,
        accept:"Nah"
    })
    return(
        <PackageContext.Provider 
        value = {{
            data: mission,
            isMissionAccepted:() => {
                setMission({...mission,accept:"Hell Yeah!"})}
        }}
        >

            {props.children}
        </PackageContext.Provider>
    );
}

export default Provider;