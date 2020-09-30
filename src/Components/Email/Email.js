import React, { Component } from 'react';
import {Container ,Row ,Col ,InputGroup ,FormControl} from 'react-bootstrap';

// style
import './Email.scss';

class Email extends Component{
    render(){
        return(
            <section className="email pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={8} md={8} sm={7} className="pt-2 text-lg-left text-md-left text-sm-left text-center">
                            <h4><b>Do you have a project?</b></h4>
                            <p>Leave your email and we will contact you as soon as possible</p>
                        </Col>
                        <Col lg={4} md={4} sm={5} className="pt-2 pt-lg-0">
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Your Email"
                                aria-label="Your Email"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">SEND</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Email;