import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF ,faGoogle ,faYoutube ,faTwitter} from '@fortawesome/free-brands-svg-icons';
// logo
import Logo from './logo.svg';
// style
import './Footer.scss';

class Footer extends Component{
    render(){
        return(
            <section className="footer pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={2}></Col>
                        <Col col={10} >
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center mb-4"><img src={Logo}/></Col>
                            </Row>
                            <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et</p>
                            <Row>
                                <Col lg={3}></Col>
                                <Col lg={3} sm={6} className="text-lg-left text-center">
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </Col>
                                <Col lg={3} sm={6} className="text-lg-left text-center">
                                    <ul className="list-unstyled">
                                        <li>Phone: (+1) 615-718-7142 </li>
                                        <li>Tax: (+1) 541-524-7117</li>
                                    </ul>
                                </Col>
                                <Col lg={3}></Col>
                            </Row>
                            <ul className="d-flex justify-content-center list-unstyled media mt-3 ml-3">
                                <li className="facebook"><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faGoogle} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            </ul>
                            <p className="text-center mt-5">Copyrights © All Rights Reserved</p>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Footer;