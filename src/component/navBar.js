import React from 'react'
import {Navbar, Nav,  Container} from 'react-bootstrap'
import logo from '../logo.svg';
export function NavigationBar(){
    const backcolor = {
        backgroundColor:"rgba(192,192,192,0.90)",
        
        
    }

    return(
        
        <Navbar  expand="md" className="" style={backcolor}>
            <Container fluid="md" className="">
                <img src={logo} className="App-logo" alt="logo"/>
                <Navbar.Brand className="text-white">Hon Kwok \(-w-)/</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto text-white" navbarScroll>
                    <Nav.Link href="/my-personal-web/" className="text-white">Home</Nav.Link>
                    <Nav.Link href="/my-personal-web/#/aboutMe" className="text-white">About me</Nav.Link>
                    <Nav.Link href="/my-personal-web/#/project" className="text-white">Project</Nav.Link>
                    <Nav.Link href="/my-personal-web/#/contact" className="text-white">Contact</Nav.Link>
                    
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}