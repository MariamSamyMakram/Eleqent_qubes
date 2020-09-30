import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';
// style
import './contact.scss';

class Contact_PE extends Component{
    render(){
        return(
            <section className="Contact_PE pt-5 pb-5">
                <Container className="pt-lg-2">
                    <Row>
                        <Col lg={12} className="text-center mb-lg-5 mb-4">
                            <h1>Contact</h1>
                        </Col>

                        <Col  lg={{ span: 3, offset: 1 }} md={4} sm={4} className="text-center">
                            <h4 className="mb-3">Phone</h4>
                            <p>+7 (885) 589 69 85</p>
                        </Col>
                        <Col  lg={4} md={4} sm={4} className="text-center">
                            <h4 className="mb-3">Email</h4>
                            <p><a href="#">EQ@info.com</a></p>
                        </Col>
                        <Col  lg={3} md={4} sm={4} className="text-center">
                            <h4 className="mb-3">Headquater</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur</p>
                        </Col>
                        <Col lg={{ span: 10, offset: 1 }}>
                            <hr/>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        );
    }
} 

export default Contact_PE;