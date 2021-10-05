import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Link to="/home" className="navbar-brand logoFont d-flex align-items-center gap-3">
                        <img
                            src="/logo.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        Dancee</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav mx-auto">
                        <Nav className="mx-auto navLink">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/About">About</Link>
                            <Link className="nav-link" to="/services">Services</Link>
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;