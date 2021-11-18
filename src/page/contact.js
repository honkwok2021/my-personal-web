import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {ContactPart} from '../component/index'
import address from '../img/icons8-address-40.png'
import phone from '../img/icons8-mobile-phone-48.png'
import email from '../img/icons8-email-50.png'



export function Contact(){
    return(
        <div>
            <h2>Contact</h2>
            <Container fluid="md" className="p-5" >
                <Row>
                    
                    <Col className="d-grid gap-5 justify-content-centre"> 
                        
                        <ContactPart title ="EMAIL" info="honpankwok@gmail.com" logo={email}/>
                        <ContactPart title ="ADDRESS" info="Wolli Creek NSW 2205" logo={address}/>
                    </Col>
                    
                    <Col>
                        <div className='map d-grid gap-2 justify-content-center' >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.488789033408!2d151.1518660158814!3d-33.928554429595316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b090fa04e549%3A0xcc1f9771ce3968b0!2sWolli%20Creek!5e0!3m2!1sen!2sau!4v1628144830236!5m2!1sen!2sau" width="550" height="400"  allowFullScreen="" loading="lazy" title="map"></iframe>
                        
                        </div> 
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    )
}