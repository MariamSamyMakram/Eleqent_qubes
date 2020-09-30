import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF ,faGoogle ,faYoutube ,faTwitter} from '@fortawesome/free-brands-svg-icons';
import Btn from './button.svg';
import './Banner.scss';

class Banner extends Component{
    render(){
        return(
            <section className="banner pt-0 pb-5 pt-lg-5" >
                <Container className="pt-2 pt-lg-3 mt-5">
                    <Row>
                        <Col lg={4} md={6}>
                            <h1>QUALIITY NEVER GOES OUT OF STYLE</h1>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et 
                            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
                            ipsum dolor</p>
                            <span className="square mt-5  mb-5">
                                <a href="#">EXPLORE  <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                            </span>
                            <br/>
                            <ul className="media mt-5">
                                <li className="facebook"><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faGoogle} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Banner;