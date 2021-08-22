import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {ResumePart, ResumeWorkPart } from '../component/index';
import './style/style.css'
import htmlimg from '../img/icons8-html-5-48.png'
import css3img from '../img/icons8-css3-48.png'
import javascriptimg from '../img/icons8-javascript-48.png'
import bootstrapimg from '../img/icons8-bootstrap-48.png'
import reactimg from '../img/icons8-react-40.png'
import csharpimg from '../img/icons8-c-sharp-logo-50.png'
import dotnetcoreimg from '../img/NET_Core_Logo.png'
import sqlimg from '../img/icons8-sql-48.png'
import { ThemeColor } from '../App';

export function AboutMe(){
    const picture = [
        {key: 1, src:[htmlimg]},
        {key: 2,src: [css3img]},
        {key: 3,src: [javascriptimg]},
        {key: 4,src: [bootstrapimg]},
        {key: 5,src: [reactimg]},
        {key: 6,src: [csharpimg]},
        {key: 7,src: [dotnetcoreimg]},
        {key: 8,src: [sqlimg]}
    ];
    const theme = useContext(ThemeColor);
    const backgroundColor = {
        backgroundColor: theme? "rgba(240, 255, 255, 0.637)" : "rgba(138, 133, 133, 0.637)",
        color: theme? "white" : "black",
        
    }
    const heading={
        color: theme? "grey" : "aliceblue",
    }
    
    return(
        
        <div  style={backgroundColor}>
            <Container className="py-5 " fluid="md" >
                
                <Row className="border rounded bg-secondary p-2" >
                    <h2>Education</h2>
                    <Col >
                    <ResumePart 
                        institution ="Tafe - Petersham "
                        year ="2021 Feb - 2021 Jun"
                        info ="Diploma of Software Development"
                        description="A full-time course on learning and applying ASP.NET Core MVC, REST API, React & React Native, 
                        Bootstrap & jQuery, Testing/Debugging and Project Management - Agile"
                        className="border rounded"
                    />
                    <ResumePart 
                        institution ="Tafe - Petersham "
                        year =" 2020 Jul - 2020 Dec"
                        info =" Certificate IV In Programming"
                        description="A full-time course on learning and applying C#, HTML&CSS, JavaScript, Database & SQL , 
                        Object Oriented Design and fundamental of Project Management"
                    />
                    <ResumePart 
                        institution ="University of Technology, Sydney"
                        year =" 2012 Jul - 2014 Jun"
                        info =" Master of Information Technology (Extended)"
                        description="Mainly focus on information system and project management in IT industry"
                    />
                    <ResumePart 
                        institution ="University of Sydney"
                        year ="2010 Jul - 2012 Jun"
                        info ="Bachelor of Arts and Social Science"
                        description="Study about culture, gender, society and philosophy. I have also learnt some Japanese as elective in this undergrade degree"
                    />
                    </Col>
                     
                </Row>
                
            </Container>
            <Container fluid="sm" className="py-5">
                <Row className="border rounded bg-secondary p-2" >
                    <Col>
                        <h2>Work History</h2>
                        <ResumeWorkPart
                            title="Optical Assistant"
                            company="Specsavers Sydney Central (NSW) Pty Ltd"
                            year ="2018 - Current"
                            descriptionOne="Worked with the team and advised patients on selecting suitable optical products."
                            descriptionTwo="Handled and solved customers' issues on their spectacles"
                            descriptionThree="Worked closely with the team to follow-up tasks"
                            
                        />
                        <ResumeWorkPart
                            title="Sales and Service Consultant"
                            company="BUPA HI Pty Ltd"
                            year ="2017"
                            descriptionOne="Provided information and advice to customer about health insurance"
                            descriptionTwo="Assessed and processed customers' claims"
                            descriptionThree="Built networks with potential clients and business partners"
                        />
                        <ResumeWorkPart
                            title="Optical Assistant"
                            company="ViewPoint Optical"
                            year ="2015-2017"
                            descriptionOne="Advised patients on selecting suitable spectacle products and contact lenses"
                            descriptionTwo="Maintained stock level and customer database"
                            descriptionThree="Prepared monthly statement and invoice billing for process"
                        />
                    </Col>
                    
                </Row>
            </Container>
            
            <Container fluid="sm" className="py-5 ">
                <Row className="border rounded bg-secondary p-1">
                   
                    <Col>
                        <h2>Skills</h2>
                        
                        <div className="border bg-light">
                            {picture.map((pic) => <img src={pic.src} key={pic.key} alt='name' />)}
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}