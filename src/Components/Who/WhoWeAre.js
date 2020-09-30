import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './WhoWeAre.scss';

class WhoWeAre extends Component{
    render(){
        return(
            <section className="whoWeAre pt-5 pb-5">
                <Container className="pt-lg-2">
                    <Row>
                        <Col lg={12} className="text-center mb-lg-5 mb-4">
                            <h1>Who we are</h1>
                        </Col>
                        <Col lg={9} className="mb-3">
                            <p>Elegant Qubes Decorations & Events LLC is an Interior Decorations, deluxe events management and design conceptualization company headquartered in Dubai. Our focused & customer-oriented group is serving the exhibition and events industry, rendering innovative design for luxurious interior & studio sets with utmost professionalism and artistry.</p>
                        </Col>
                        <Col lg={{span:5 , offset:1}} md={6}>
                            <p className="paragh">Elegant Qubes Decorations & Events LLC is an Interior Decorations, deluxe events management and design conceptualization company headquartered in Dubai. Our focused & customer-oriented group is serving the exhibition and events industry, rendering innovative design for luxurious interior & studio sets with utmost professionalism and artistry.</p>
                        </Col>
                        <Col lg={5} md={6}>
                            <p className="paragh">Elegant Qubes Decorations & Events LLC is an Interior Decorations, deluxe events management and design conceptualization company headquartered in Dubai. Our focused & customer-oriented group is serving the exhibition and events industry, rendering innovative design for luxurious interior & studio sets with utmost professionalism and artistry.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default WhoWeAre;