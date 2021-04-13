import React, { useState } from 'react'


import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import './App.css';

import { ToastContainer , toast } from 'react-toastify';
import { Container , Col , Row } from "reactstrap"

import Cart from "./Components/Cart"
import BuyPage from './Components/BuyPage';


function App() {

const [cartItem,setCartItem] = useState([]);

// TODO: const[quantity,setQuantity]  = useState(0);

const addInCart = item => {
  const isAlreadyAdded = cartItem.findIndex(function(array) {
    return array.productId === item.productId;
  });

  if (isAlreadyAdded !== -1) {
    toast.dark("Already Added",{
      hideProgressBar : true,
      closeOnClick:true,
    });
    return;
  }

  setCartItem([...cartItem, item]);
};


const buyNow = () => {
  setCartItem([]);

  toast.dark("Purchase Complete",{
    hideProgressBar : true,
    closeOnClick:true,
  });
};

const removeItem = item => {
  setCartItem(cartItem.filter(singleItem => singleItem.productId !== item.productId));
};



  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
