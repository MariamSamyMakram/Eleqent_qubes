import React, { Component } from 'react';
import  {Container ,Row ,Col} from'react-bootstrap';
// style
import './Projects.scss';
// images
import project1 from './p1.jpg';
import project2 from './p2.jpg';
import project3 from './p3.jpg';
import project4 from './p4.jpg';
import project5 from './p5.jpg';
import project6 from './p6.jpg';

class Projects extends Component{
    render(){
        return(
            <section className="projects pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="pb-5">
                            <h1>Projects</h1>
                        </Col>
                        <Col lg={3} className="pr-lg-1 pb-2 d-lg-flex align-items-center">
                            <div className="project">
                                <img src={project1} className="h-rl"/>
                                <a href="#" className="overlay">
                                    <p>Elegant Qubes Decorations & Events LLC is an Interior Decorations, deluxe events management </p>
                                </a>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <Row>
                                <Col lg={8} md={6} sm={6} className="pr-lg-1 pl-lg-1 pb-2">
                                    <div className="project">
                                        <img src={project2} className="h-250"/>
                                        <a href="#" className="overlay">
                                            <p>Elegant Qubes Decorations & Events LLC is an Interior Decorations, deluxe events management </p>
                                        </a>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={6} className="pr-lg-1 pl-lg-1 pb-2 d-lg-flex align-items-end">
                                    <div className="project">
                                        <img src={project3} className="h-180"/>
                                        <a href="#"  className="overlay">
                                            <p>Elegant Qubes Decorations & Events LLC is an Interior Decorations, deluxe events management </p>
                                        </a>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={6} className="pr-lg-1 pl-lg-1 pt-2 pb-2">
                                    <div className="project">
                                        <img src={project4} className="h-180"/>
                                        <a href="#"  className="overlay">
                                            <p>Elegant Qubes Decorations & Events LLC is an Interior Decorations, deluxe events management </p>
                                        </a>
                                    </div>
                                </Col>
                                <Col lg={8} md={6} sm={6} className="pr-lg-1 pl-lg-1 pt-2 pb-2">
                                    <div className="project" >
                                        <img src={project5} className="h-250"/>
                                        <a href="#"  className="overlay">
                                            <p>Elegant Qubes Decorations & Events LLC is an Interior Decorations, deluxe events management </p>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} className="pl-lg-1 pb-2 d-lg-flex align-items-center">
                            <div className="project">
                                <img src={project6} className="h-rl"/>
                                <a href="#"  className="overlay">
                                    <p>Elegant Qubes Decorations & Events LLC is an Interior Decorations, deluxe events management </p>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Projects;