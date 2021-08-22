import React, { useContext } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { ThemeColor } from '../App';

export function ContactPart({logo, info, title}){
    const theme = useContext(ThemeColor);
    const contactStyle={
        color: "grey",
        backgroundColor:theme? "rgba(245, 248, 245, 0.948)": "rgba(90, 87, 84, 0.863)" ,
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