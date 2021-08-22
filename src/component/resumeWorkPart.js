import React, { useContext } from 'react'
import { ThemeColor } from '../App';
import './resumeStyle.css'


export function ResumeWorkPart({ company, title, year, descriptionOne, descriptionTwo, descriptionThree}){
    const theme = useContext(ThemeColor);
    const heading ={
        color:theme?"rgba(0, 0, 128, 0.726)" : "black"
    }
    const textStyle={
        textAlign: 'left',
        backgroundColor:"white",
        color:theme? "black" : "rgba(0, 0, 128, 0.726)",
        padding:'5px',
        opacity:"0.9",
        margin:"0px 0px 0px",
        border: 'solid 1px',
        borderBottom: '0.5px solid',
    }
    return(
        <div>
            <div className="flex-container" style={heading} >
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