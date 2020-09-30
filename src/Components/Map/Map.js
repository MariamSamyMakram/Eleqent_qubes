import React, { Component } from 'react';
import {Container ,Row ,Col ,Form} from 'react-bootstrap';
import Map from 'react-js-google-maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
// style
import './Map.scss';

const setMarker = () => {
    var uluru = { lat: -25.363, lng: 131.044 };
    var marker = new window.google.maps.Marker({
      position: uluru,
      map: window.gmaps['map1'].gmap
    });
  };

class Maps extends Component{
    render(){
        const mapOptions = {
            zoom: 4,
            center: { lat: -25.363, lng: 131.044 }
          };
        const onMapLoad = () => {
            setMarker();
        }
        return(
            <section className="map pt-2 pb-3 ">
                <Container>
                    <Row>
                        <Col lg={6} md={6}  className="mb-5 mb-lg-0">
                            <p className="mb-lg-5 mb-2 pb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                                aliquyam erat, sed diam voluptua.</p>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="First Name*" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email Address*" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Phone Number*" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={2} placeholder="Message*" />
                                </Form.Group>
                                <br/><br/>
                                <span className="square mt-5  mb-5">
                                    <a href="#">SEND  <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </span>
                                <br/>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} >
                            <Map
                                id="map1"
                                apiKey="MY_API_KEY"
                                mapOptions={mapOptions}
                                style={{ width: '100%', height: 630 }}
                                onLoad={this.onMapLoad}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
} 

export default Maps;