import React, { Component } from 'react';
import './Header.scss';
import {Navbar , Nav, NavItem,NavDropdown ,InputGroup ,FormControl} from 'react-bootstrap';
import {BrowserRouter as Router,Link} from "react-router-dom";
  
import Logo from './logo.png';
import Search from './search.png';

class Header extends Component{
    render(){
        return(
            <section className="header pt-3 pb-2">
                <div className="container">
                    <Router>
                        <div>
                                
                            <Navbar expand="lg">
                                <Navbar.Brand href="#">
                                    <img src={Logo}/>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        <Nav.Link href="/">Home</Nav.Link >
                                        <Nav.Link href="/who">Who we are</Nav.Link>
                                        <Nav.Link href="#">Interior</Nav.Link>
                                        <Nav.Link href="#">Events</Nav.Link>
                                        <Nav.Link href="#">Exhibition</Nav.Link>
                                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                                        <Nav.Link href="#">Store</Nav.Link>
                                        <Nav.Link href="/contact">Contact us</Nav.Link>
                                        <NavDropdown title={<img src={Search}/>} id="basic-nav-dropdown" className="d-none d-lg-block">
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    placeholder="Search"
                                                    aria-label="Search"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Append>
                                                    <InputGroup.Text id="basic-addon2">
                                                        <img src={Search}/>
                                                    </InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </NavDropdown>
                                    </Nav>

                                </Navbar.Collapse>
                            </Navbar>
                        
                        </div>
                    </Router>
                </div>
            </section>
        );
    }
}

export default Header;