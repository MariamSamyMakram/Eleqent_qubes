import React, { Component } from 'react';
import {Container ,Row ,Col ,InputGroup ,FormControl} from 'react-bootstrap';

// style
import './Methodology.scss';
// images
import one from './n1.svg';
import two from './n2.svg';
import three from './n3.svg';
import four from './n4.svg';
import five from './n5.svg';
import six from './n6.svg';
import seven from './n7.svg';
import eight from './n8.svg';

class Methodology extends Component{
    render(){
        return(
            <section className="Methodology pt-4 pb-4">
                <Container>
                    <Row>
                        <Col lg={12} className="pb-5">
                            <h1>Methodology </h1>
                        </Col>
                        <Col lg={12} className="pt-5">
                            <ul class="cell1" >
                                <li class="square">
                                    <div className="content">
                                        <Row>
                                            <Col lg={3}>
                                                <img  />
                                            </Col>
                                            <Col lg={9}>
                                                <img/>
                                                <h2></h2>
                                                <p></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </li>
                                <li class="square">
                                    <div className="content">
                                        <Row>
                                            <Col lg={3}>
                                                <img  />
                                            </Col>
                                            <Col lg={9}>
                                                <img/>
                                                <h2></h2>
                                                <p></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </li>
                                <li class="square">
                                    <div className="content">
                                        <Row>
                                            <Col lg={3}>
                                                <img  />
                                            </Col>
                                            <Col lg={9}>
                                                <img/>
                                                <h2></h2>
                                                <p></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </li>
                                <li class="square">
                                    <div className="content">
                                        <Row>
                                            <Col lg={3}>
                                                <img  />
                                            </Col>
                                            <Col lg={9}>
                                                <img/>
                                                <h2></h2>
                                                <p></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </li>
                            </ul>
                            <ul class="cell2">
                                <li class="square">
                                    <div className="content">
                                        <Row>
                                            <Col lg={3}>
                                                <img  />
                                            </Col>
                                            <Col lg={9}>
                                                <img/>
                                                <h2></h2>
                                                <p></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </li>
                                <li class="square">
                                    <div className="content">
                                        <Row>
                                            <Col lg={3}>
                                                <img  />
                                            </Col>
                                            <Col lg={9}>
                                                <img/>
                                                <h2></h2>
                                                <p></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </li>
                                <li class="square">
                                    <div className="content">
                                        <Row>
                                            <Col lg={3}>
                                                <img  />
                                            </Col>
                                            <Col lg={9}>
                                                <img/>
                                                <h2></h2>
                                                <p></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </li>
                                <li class="square" id="border-top">
                                    <div className="content">
                                        <Row>
                                            <Col lg={3}>
                                                <img  />
                                            </Col>
                                            <Col lg={9}>
                                                <img/>
                                                <h2></h2>
                                                <p></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Methodology;