import React from 'react'
import './resumeStyle.css'


export function ResumeWorkPart({ company, title, year, descriptionOne, descriptionTwo, descriptionThree}){
    
    const textStyle={
        textAlign: 'left',
        backgroundColor:"white",
        color: "black",
        padding:'5px',
        opacity:"0.9",
        margin:"0px 0px 0px",
        border: 'solid 1px',
        borderBottom: '0.5px solid',
    }
    return(
        <div>
            <div className="flex-container" >
                <h5>{title}</h5>
                <span>{company}</span>
                <br/>
                <p>{year}</p>

            </div>
            <div style={textStyle}>
            <p>{descriptionOne}</p>
            <p>{descriptionTwo}</p>
            <p>{descriptionThree}</p>
            </div>
            
        </div>
    );
}