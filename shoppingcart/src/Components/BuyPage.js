import React, { useState, useEffect } from 'react';
import Axios from "axios";

import {random, commerce } from "faker";
import {Container , Col, Row} from "reactstrap";
import {v4} from "uuid";

import CartItem from "./CartItem"


const url = "https://api.jsonstorage.net/v1/json/74109551-a1df-4069-8831-478d0608b2e1";

const BuyPage = ({addInCart}) => {

    const [product, setProduct] = useState([]);

    const fetchPhotos = async() =>{

        const { data } = await Axios.get(url,{}); // get(url , {header: api_key}) for real apis
        
        const {photos} = data;

    const allProducts = photos.map( photo => ({

        smallImage: photo.src.medium,
        tinyImage: photo.src.tiny,
        productName: random.word(),
        productPrice: commerce.price(),
        productId  : v4(),
        
    }));

    setProduct(allProducts);

    };
    
    useEffect(() => {
        fetchPhotos();
      }, []);

    return(
      <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map(product => (
          <Col md={4} key={product.productId}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
    );
}

export default BuyPage;
 