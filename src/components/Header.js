import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    return (
        <>
            <Navbar className="nav-container" bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand className="menu" href="#portfolio">Portfolio</Navbar.Brand>
                        <Navbar.Brand className="menu" href="#resume">Resume</Navbar.Brand>
                        <Navbar.Brand className="menu" href="#about">About Me</Navbar.Brand>
                        <Navbar.Brand className="menu" href="#contact">Contact</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;