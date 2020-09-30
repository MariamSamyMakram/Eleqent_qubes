import React, { Component } from 'react';
import {Container ,Row ,Col} from 'react-bootstrap';

// style
import './Images.scss';
// images
import photo1 from './03.png';
import photo2 from './03-1.png';
import photo3 from './03-2.png';
import photo4 from './03-3.png';
import photo5 from './03-4.png';
import photo6 from './03-5.png';
import photo7 from './03-6.png';
import photo8 from './03-7.png';
import photo9 from './03-8.png';

class Images extends Component{
    render(){
        return(
            <section className="images pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center mb-5">
                            <h1>Gallery</h1>
                        </Col>
                        <Col lg={4} md={4} sm={6} className="mb-3 pr-lg-2 pl-lg-2">
                            <div className="image">
                                <img src={photo1}/>
                                <div className="overlay_gallery">
                                    <a href="#">Name Project</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} className="mb-3 pr-lg-2 pl-lg-2">
                            <div className="image">
                                <img src={photo2}/>
                                <div className="overlay_gallery">
                                    <a href="#">Name Project</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} className="mb-3 pr-lg-2 pl-lg-2">
                            <div className="image">
                                <img src={photo3}/>
                                <div className="overlay_gallery">
                                    <a href="#">Name Project</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} className="mb-3 pr-lg-2 pl-lg-2">
                            <div className="image">
                                <img src={photo4}/>
                                <div className="overlay_gallery">
                                    <a href="#">Name Project</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} className="mb-3 pr-lg-2 pl-lg-2">
                            <div className="image">
                                <img src={photo5}/>
                                <div className="overlay_gallery">
                                    <a href="#">Name Project</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} className="mb-3 pr-lg-2 pl-lg-2">
                            <div className="image">
                                <img src={photo6}/>
                                <div className="overlay_gallery">
                                    <a href="#">Name Project</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} className="mb-3 pr-lg-2 pl-lg-2">
                            <div className="image">
                                <img src={photo7}/>
                                <div className="overlay_gallery">
                                    <a href="#">Name Project</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} className="mb-3 pr-lg-2 pl-lg-2">
                            <div className="image">
                                <img src={photo8}/>
                                <div className="overlay_gallery">
                                    <a href="#">Name Project</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} className="mb-3 pr-lg-2 pl-lg-2">
                            <div className="image">
                                <img src={photo9}/>
                                <div className="overlay_gallery">
                                    <a href="#">Name Project</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
} 

export default Images;