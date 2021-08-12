import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {ProjectPart} from '../component/projectPart'
import reactnoteimg from "../img/reactnotetakingimg.PNG"
import honimg from "../img/Honwebsiteimg.PNG"
import membership from "../img/SimpleMembership.PNG"
import holidayapt from "../img/holiday-apartment.PNG"
import './style/style.css'

export function ProjectPage(){
    return(
        <div>
            <Container fluid="md">
                <Row>
                    <Col className="project-flexcontainer" style={{display:'flex',flexDirection: '',padding:"15px", gap:'20px'}} >
                        
                        <ProjectPart 
                        projectImage={honimg}
                        projectName="React website" 
                        projectDescription="A personal website built with React, CSS and Bootstrap"
                        githubLink="https://github.com/honkwok2021/my-personal-web.git"
                        website="https://honkwok2021.github.io/my-personal-web/"
                        />
                        
                        <ProjectPart 
                        projectImage={reactnoteimg}
                        projectName="Simple React Note Taking" 
                        projectDescription="A simple note taking application with CRUD function"
                        githubLink="https://github.com/honkwok2021/simple-note-taking.git"
                        website="https://simple-react-note-taking-app.netlify.app/"
                        />

                        

                        <ProjectPart 
                        projectImage={membership}
                        projectName="Simple Membership System" 
                        projectDescription="A simple web application with CRUD function using ASP.Net Core MVC."
                        githubLink="https://github.com/honkwok2021/SimpleMembershipSystem.git"
                        
                        />

                        <ProjectPart 
                        projectImage={holidayapt}
                        projectName="Sorrento By The Sea" 
                        projectDescription="A simple website built with HTML&CSS and JavaScript. Simple JavaScript validation is included"
                        githubLink="https://github.com/honkwok2021/HTML_CSS_JavaScript.git"
                        website="https://happy-holiday-apartment.netlify.app/index.html"
                        />

                        <ProjectPart
                        projectName="more is coming"
                        projectDescription="more is coming"
                        githubLink="more later"
                        website="more later"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}