import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// images
import service1 from './p1.jpeg';
import service2 from './p2.jpeg';
import service3 from './p3.png';

//style
import './Services.scss'; 

class Services extends Component{
    render(){
        return(
            <section className="services">
                <Container>
                    <Row>
                        <Col lg="2" sm={3} xs={5} className="mb-4 pt-2  pr-0 ">
                            <p className="title">OUR SERVICES</p>
                        </Col>
                        <Col lg={10} sm={9} xs={7} className="mb-4"><hr/></Col>
                        <Col lg={{span:3 ,offset:3}} sm={6} className=" mt-lg-5 pt-lg-5 mt-sm-5 pt-5 mb-lg-0 mb-4">
                            <h4 className=" mt-lg-5 pt-lg-5 pt-3"><b>Interior</b></h4>
                            <p className="mt-4">Ensuring the artistic reality envisioned in your mind is materialised.</p>
                            <a href="#">MORE <FontAwesomeIcon icon={faPlus} /></a>
                        </Col>
                        <Col lg={5} sm={6} className="mb-5">
                            <img src={service1} />
                        </Col>
                        <Col lg={{span:5 ,offset:1}} sm={6}  className="mb-5">
                            <img src={service2} />
                        </Col>
                        <Col lg={3} sm={6}  className=" mt-lg-5 pt-lg-5 mt-sm-5 pt-5 mb-lg-0 mb-4">
                            <h4 className=" mt-lg-5 pt-lg-5 pt-3"><b>Events</b></h4>
                            <p className="mt-4">To bring about the best results whatever the occasion demands.</p>
                            <a href="#">MORE <FontAwesomeIcon icon={faPlus} /></a>
                        </Col>
                        <Col lg={{span:3 ,offset:3}} sm={6}  className=" mt-lg-5 pt-lg-5 mt-sm-5 pt-5 mb-lg-0 mb-4">
                            <h4 className=" mt-lg-5 pt-lg-5 pt-3"><b>Exhibitions</b></h4>
                            <p className="mt-4">Delivering the most effective and sophisticated solutions.</p>
                            <a href="#">MORE <FontAwesomeIcon icon={faPlus} /></a>
                        </Col>
                        <Col lg={5} sm={6}  className="mb-5">
                            <img src={service3} />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Services;