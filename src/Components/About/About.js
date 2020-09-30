import React, { Component } from 'react';
import {Container ,Row ,Col ,ResponsiveEmbed} from 'react-bootstrap';
import Modal from 'react-awesome-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './About.scss';
import Emdaa from './Layer 2.svg';
import bg from './bg.png';
import video from './video.png'

class About extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    render(){
        return(
            <section className="about  pb-4">
                <Container>
                    <Row>
                        <Col lg={12} md={12} className="title ">
                            <h4>About Us</h4>
                        </Col>
                        <Col lg={7} md={7} className="pl-5 pt-5 text-right about_us">
                            <h1 className="pb-4">Elegant Qubes Decorations LLC</h1>
                            <p className="pb-3">Elegant Qubes Decorations & Events LLC is an Interior Decorations,
                                deluxe events management and design conceptualization company headquartered in Dubai.
                                Our focused & customer-oriented group is serving the exhibition and events industry, 
                                rendering innovative design for luxurious interior &
                                studio sets with utmost professionalism and artistry.</p>
                            <img src={Emdaa}/>
                        </Col>
                        <Col lg={5} md={5} className="pr-5 video">
                            <a type="button" value="Open" onClick={() => this.openModal()}>
                                <img src={video}/>
                                <div className="overlay">
                                    <div className="circle">
                                        <FontAwesomeIcon icon={faCaretRight} />
                                    </div>
                                </div>
                            </a>
                            <Modal 
                                visible={this.state.visible}
                                width="400"
                                height="300"
                                effect="fadeInUp"
                                onClickAway={() => this.closeModal()}
                                className="model"
                            >
                                <div className="model">
                                    <div style={{ width: 660, height: 'auto' }} className="model">
                                        <ResponsiveEmbed aspectRatio="16by9">
                                            <embed src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                        </ResponsiveEmbed>
                                    </div>
                                </div>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default About;