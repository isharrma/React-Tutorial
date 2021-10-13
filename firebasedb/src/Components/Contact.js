import React,{useContext} from 'react';
import {useHistory} from "react-router-dom";

import { Row,Col } from 'reactstrap';

import {FaRegStar, FaStar} from "react-icons/fa";
import {MdDelete, MdEdit} from "react-icons/md";
import {toast} from "react-toastify";

import fireabse from  "firabase/app";
import "fireabse/auth";



const Contact =({contact,contactKey}) => {

    const history = useHistory();

    const deleteContact = () =>{

    }
    const updateImpContact = ()=>{

    }

    const updateContact = () => {
        history.push("/contact/add");
    };

    const viewSingleContact = contact =>{
        history.push("/contact/view");
    }

    return (
        <>
            <Row>
                <Col
                md="1"
                className="d-flex justify-content-center align-items-center"
                >
                    <div className="icon" onClick={()=> updateContact()}>
                    {
                        contact.star ?(
                            <FaStar className="text-priary" />
                        ):(
                            <FaRegStar className="text-info" />
                        )
                    }
                    </div>
                </Col>
                <Col
                md="2"
                className="d-flex justify-content-center align-items-center"
                >
                    <img src={contact.picture} alt="" className="img-circle-profile"/>
                </Col>
                <Col md="8" onClick={ ()=> viewSingleContact(contact) } >
                    <div className="text-primary">{contact.name}</div>
                    <div className="text-secondary">{contact.phoneNumber}</div>
                    <div className="text-secondary">{contact.email}</div>
                    <div className="text-info">{contact.address}</div>
                </Col>
                <Col
                md="1"
                className="d-flex justify-content-center align-items-center"
                >
                    <MdDelete
                    onClick={() => deleteContact()}
                    color="danger"
                    className="text-danger icon"
                    />
                    <MdEdit
                    className="icon text-info ml-2"
                    onClick={() => updateContact()}
                    />
                </Col>
            </Row>
        </>
    )
}

export const Contact;