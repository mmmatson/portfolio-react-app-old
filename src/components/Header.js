import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({ currentPage, handlePageChange }) {

    return (
        <>
            <Navbar className="nav-container" bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                        <Navbar.Brand id="menu" href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Navbar.Brand>
                        <Navbar.Brand id="menu" href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Navbar.Brand>
                        <Navbar.Brand id="menu" href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</Navbar.Brand>
                        <Navbar.Brand id="menu" href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;