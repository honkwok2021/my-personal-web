import React, { useContext, useState } from 'react';
import logo from '../logo.svg';
import './headerStyle.css';
import {NavigationBar} from './navBar'
import {Navbar, Nav,  Container} from 'react-bootstrap'
import { ThemeColor } from '../App';


export function Header({color, setColor}){

    return(
        <div className="header ">
            <NavigationBar color={color} setColor={setColor}/>
        </div>
    );
}