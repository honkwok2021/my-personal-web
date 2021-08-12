import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style/style.css'
import linkedin from '../img/icons8-linkedin-96.png'
import githubimg from '../img/icons8-github-96.png'
import emailimg from '../img/icons8-mail-96.png'
import honimg from '../img/Icon2.png'

export function Home(){
    return(
        <div>
            <Container fluid="md">
                <Row className="">
                    <Col >
                    
                    </Col>
                    <Col md={10} className="intro typewriter p-3 rounded" style={{marginTop:"15%"}}>
                        <div className="justify-content-centre " >
                            <img src={honimg} alt=" " width="200px" />
                            
                        </div>
                        <h2>Hello Ha! I am Hon.(\^W^/)</h2>
                        <h6 className="">
                            Hi Everyone!  My name is Hon, a former optical assistant.  I am an aspiring programmer having recently completed a Diploma of Programming at Tafe.  
                            I decided on a career change as I found myself being drawn to the challenge of programming and creating something that is functional and user friendly.  
                        </h6>
                        <h6>
                            I use a range of languages including HTML/CSS, React, JavaScript, C#, ASP.Net MVC, SQL...etc.  
                            I am particularly focused on usability and functionality of the sites that i design and code.  
                            I invite you to explore my webpage.  I am also open to feedback.  
                            I look forward to an opportunity to designing more application soon!
                        </h6>
                        
                        
                        
                    </Col>
                    <Col ></Col>
                </Row>
                <Row>
                    <Col >
                    
                    </Col>
                    <Col  md >
                        <div className="justify-content-centre home-flex-container" >
                            <a href="https://www.linkedin.com/in/hon-kwok-80935ba4"><img src={linkedin} alt=" "  /></a>
                            <a href="https://github.com/honkwok2021"><img src={githubimg} alt=" "  /></a>
                            <a href='mailto:honpankwok@gmail.com'><img src={emailimg} alt=" "  /></a>
                        </div>
                    </Col>
                    <Col ></Col>
                
                </Row>
            </Container>
        </div>
    )
}