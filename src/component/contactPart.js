import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export function ContactPart({logo, info, title}){
    const contactStyle={
        color: "grey",
        backgroundColor: "rgba(245, 248, 245, 0.948)",
        width:"100%",
        padding:'15px',
        borderRadius:'18px',
        
        
    }
    return(
        <Container style={contactStyle} fluid="md" >
            <Row>
                <Col>
                    
                    <h4>
                        <img src={logo} alt=""></img>
                        {title}
                    </h4>
                    <h5>{info}</h5>
                </Col>
                
            </Row>
            
        </Container>
    );
}