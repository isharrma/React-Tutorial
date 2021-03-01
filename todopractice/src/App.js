import React, { useReducer,useState,useContext} from 'react'
import {Container,Row,Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {TodoContext} from "./Context/TodoContext";
import todoreducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import ThemeContext from "./Context/ThemeContext"
import ThemeToggler from "./Components/ThemeToggler";
import AppTheme from './Context/AppTheme';

function App() {

  const [todos, dispatch] = useReducer(todoreducer,[]);
  const themeHook = useState("light");
  const theme = useContext(ThemeContext)[0];
  const currTheme = AppTheme[theme];
  
  
  return (

    <TodoContext.Provider value={{ todos, dispatch}}> 
    <ThemeContext.Provider value={{themeHook}}>
      <ThemeToggler/>
      <Container style={{
        backgroundColor:`${currTheme.backgroundColor}`,
        color: `${currTheme.color}`
        
      }}>
        <Row>
          <Col><h1>Todo App with Context API</h1></Col>
        </Row>
       <Row>
         <Col sm="12" md={{ size: 6, offset: 3 }}><TodoForm /></Col>
       </Row>
        <Todos/>
      </Container>
      
      </ThemeContext.Provider>
    </TodoContext.Provider>
    
  );
}

export default App;
