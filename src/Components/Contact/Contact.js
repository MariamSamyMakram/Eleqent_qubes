import React, { Component } from 'react';
import {Container ,Row ,Col ,Form ,Button} from 'react-bootstrap';
// style
import './Contact.scss';

class Contact extends Component{
    render(){
        return(
            <section className="contact mt-5 mb-5">
                <Container className="bg">
                    <Row>
                        <Col lg={6} md={4} className="pt-lg-5">
                            <ul className="list-unstyled  mt-lg-5 mt-md-5">
                                <li className="pt-lg-5 pt-md-5">
                                    <h4><b>Interior</b></h4>
                                    <p>Ensuring the artistic reality envisioned in your mind is materialised</p>
                                </li>
                                <li className="pt-lg-5 pt-md-5">
                                    <h4><b>Events</b></h4>
                                    <p>To bring about the best results whatever the occasion demands.</p>
                                </li>
                                <li className="pt-lg-5 pt-md-5">
                                    <h4><b>Exhibitions</b></h4>
                                    <p>Delivering the most effective and sophisticated solutions.</p>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6} md={8}>
                            <h1>QUALITY NEVER <br/>GOES OUT OF style</h1>
                            <p className="mt-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            <Form className="mt-4">
                                <Form.Group>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email Addrees" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={4}  placeholder="Enter Your Message"/>
                                </Form.Group>
                                <Button variant="warning" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Contact;