import React, { useContext } from 'react'
import {Navbar, Nav,  Container} from 'react-bootstrap'
import { ThemeColor } from '../App';
import logo from '../logo.svg';

export function NavigationBar({color, setColor}){
    const theme = useContext(ThemeColor);
    const backcolor = {
        backgroundColor:theme? "rgba(192,192,192,0.90)" : "rgba(14, 13, 13, 0.815)" ,
 
    }
    const buttonStyle = {
        border: theme? "3px solid khaki": " 3px solid black",
        borderRadius: "10px",
        backgroundColor:theme? "aliceblue": "darkgrey",
        color: theme? "grey" : "white",
        padding:"5px"
    }
    function changeAllColor(e){
        setColor(!color)
    }
    return(
        
        <Navbar  expand="md" className="" style={backcolor}>
            <Container fluid="md" className="">
                <img src={logo} className="App-logo" alt="logo"/>
                <Navbar.Brand className="text-white">Hon Kwok \(-w-)/</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto text-white " navbarScroll>
                    <Nav.Link href="/my-personal-web/#/" className="text-white">Home</Nav.Link>
                    <Nav.Link href="/my-personal-web/#/aboutMe" className="text-white">About me</Nav.Link>
                    <Nav.Link href="/my-personal-web/#/project" className="text-white">Project</Nav.Link>
                    <Nav.Link href="/my-personal-web/#/contact" className="text-white">Contact</Nav.Link>
                    <button onClick={changeAllColor} style={buttonStyle}>Theme Color</button>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}