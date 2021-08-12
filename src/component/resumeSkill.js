import React from 'react'
import Card from 'react-bootstrap/Card'

export function ResumeSkills({ info, title}){
    const contactStyle={
        color: "grey",
        backgroundColor: "rgba(245, 248, 245, 0.948)",
        width:'30rem',
        padding:'10px',
        borderRadius:'18px'
        
    }
    return(
        <Card style={contactStyle}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{info}</Card.Text>
            </Card.Body>
            
        </Card>
    );
}