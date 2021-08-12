import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export function ProjectPart({projectName, projectDescription, projectImage, githubLink, website}){
    

    function checkNull(){
        if(website == null){
            alert("website is not available for now. is comming soon :))");
        }
    }
    return(
        <Card className="card-flexcontainer" style={{width: '18rem',marginTop:'8%', padding:'5px' }}>
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