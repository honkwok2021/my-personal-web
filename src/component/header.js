import React from 'react';
import logo from '../logo.svg';
import './headerStyle.css';
import {NavigationBar} from './navBar'
import {Navbar, Nav,  Container} from 'react-bootstrap'


export function Header(){


    return(
        <div className="header ">
            
            <NavigationBar/>
        </div>
    );
}