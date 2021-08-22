import React, { useContext } from 'react'
import { ThemeColor } from '../App'
import './resumeStyle.css'


export function ResumePart({logo, info, institution, year, description}){
    const theme = useContext(ThemeColor)
    const generalStyle={
        backgroundColor: "white",
        color:theme? "navy" : "brown",    
        padding:"12px",
        gap:"15px",
        border: "solid 1px",
        borderBottom: "2px solid",
        paddingBottom:"0px",
        marginBottom:"0px"
    }
    const partialStyle={
        backgroundColor: "white",    
        textAlign:"left",
        marginTop:"2%",
        marginBottom:"0px"
        
        
    }

    return(
        <div style={generalStyle}>
            <div className="edu-flex-container">
            <h5>{info}</h5>
            <span>{year}</span>
            <br/>
            <p>{institution}</p>
            
            </div>
            <div style={partialStyle}>
                <p>{description}</p>
            </div>
        </div>
        
    );
}