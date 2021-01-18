import React,{useState} from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, Container, Col,Row, Button} from 'reactstrap';
import './App.css';

import Icon from "./components/Icons"


const itemArray = new Array(9).fill("empty");

function App() {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () =>{
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty");
  }

  const isWinner = () =>{
    
    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty" )
      setWinMessage(`${itemArray[0]} Wins`);
    else if(itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5] && itemArray[3] !== "empty" )
      setWinMessage(`${itemArray[3]} Wins`);
    else if(itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8] && itemArray[6] !== "empty" )
      setWinMessage(`${itemArray[6]} Wins`);
    else if(itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0] !== "empty" )
      setWinMessage(`${itemArray[0]} Wins`);
    else if(itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1] !== "empty" )
      setWinMessage(`${itemArray[1]} Wins`);
    else if(itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8] && itemArray[2] !== "empty" )
      setWinMessage(`${itemArray[2]} Wins`);
    else if(itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0] !== "empty" )
      setWinMessage(`${itemArray[0]} Wins`);
    else if(itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6] && itemArray[2] !== "empty" )
      setWinMessage(`${itemArray[2]} Wins`);

  }

  const changeItem = itemNumber =>{
    
    if(winMessage)
      return toast(winMessage, { type:"success"});

    if(itemArray[itemNumber] === "empty")
    {
      itemArray[itemNumber] = isCross? "heart":"music";
      setIsCross(!isCross);
    }else{
      return toast("Occupado",{type:"alert"}) ;
    }

    isWinner();
  }



  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
        {winMessage ? (
            <div className="mb-2 mt-2">
                <h1 className="text-primary text-uppercase text-center mb-5">
                  {winMessage}
                  
                </h1>
            </div>
          ) : (
            <h1 className="text-center text-warning mb-5">
              {isCross ? "Heart" : "Music"} Turn
            </h1>
          )}
          <div className="grid">
            {itemArray.map( (item,index) => (
              <Card onClick={ () => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
          { winMessage ? (<Button color="secondary mt-5" block onClick={reloadGame}>Reload</Button> ) : ""}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
