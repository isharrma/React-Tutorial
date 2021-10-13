import React from 'react';
import {Navbar, NavbarBrand, NavbarText} from "reactstrap";
import {Link} from "react-router-dom";

const Header = ()=> {
    return (
        <Navbar color="info" ligts>
            <NavbarBrand className="text-white">Contact App</NavbarBrand>
            <NavbarText className="text-white float-right">
                A Simple Contact App
            </NavbarText>

        </Navbar>
    )
}

export const Header;
