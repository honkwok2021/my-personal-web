import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ThemeColor } from '../App';


export function ProjectPart({projectName, projectDescription, projectImage, githubLink, website}){
    const theme = useContext(ThemeColor)
    const projectStyle={
        width: '18rem',
        marginTop:'5%',
        padding:'5px',
        backgroundColor: theme? "rgba(255,255,255, 0.8)": "rgba(0,0,0, 0.8)",
        color: theme? "black" : "white"
    }

    function checkNull(){
        if(website == null){
            alert("website is not available for now. is comming soon :))");
        }
    }
    return(
        <Card className="card-flexcontainer" style={projectStyle}>
            <Card.Img variant="top" src={projectImage} />
            <Card.Body>
                <Card.Title>{projectName}</Card.Title>
                <Card.Text>
                {projectDescription}
                </Card.Text>
                <div  className="d-grid gap-3">
                <Button variant="primary" href={githubLink} >source code</Button>
                <Button variant="secondary" href={website} onClick={checkNull}>website</Button>
                </div>
                
            </Card.Body>
        </Card>
    );
}