import React,{useState} from "react"

const Grandchild = (props) =>{
    return(
        <dv>
            <h3>Grandchild:</h3>
            <Child brand={props.brand}/>
        </dv>
    );
}

const Child = (props) =>{
  return(
    <div>
      <h1>Child: {props.brand}</h1>
    </div>
  );
}

const App = () =>{
    const [brandname] = useState(["Microsoft"])
  return(
    <div>
      <h1>Hey!</h1>
      <Grandchild   brand={brandname}/>
    </div>
  );
}


export default App;
