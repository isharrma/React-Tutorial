import React, { useState} from 'react';

import {Container, ListGroup, ListGroupItem,Spinner} from "reactstrap"
import Contact from "../Components/Contact";
import {MdAdd} from "react-icons/md";
import { useHistory } from "react-router-dom";
import { ContactContext } from '../context/Context';
import { CONTACT_TO_UPDATE } from "../context/action.types";

const Contact=() => {
    const { state,dispatch } = useContext(ContactContext);
    const {contact, isLoading} = state;
    const history = useHistory();

    const AddContact = () =>{
        history.push("/contact/add");
    }
    

    if(isLoading){
        return (
            <div className="Center">
              <Spinner color="primary" />
              <div className="text-primary">Loading...</div>
            </div>
          );
    }

    return(
        <Container className="mt-4">
            <MdAdd className="fab-icon" onClick={AddContact} />
        </Container>
    );
}

export default Contact
