import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {

    return (
        <Container fluid className="footer">
            <Row>
                <Col>
                    <a href="https://github.com/mmmatson" className="footer-icons"><FaGithub /></a>
                    <a href="https://www.linkedin.com/" className="footer-icons"><FaLinkedin /></a>
                    <a href="https://stackoverflow.com/" className="footer-icons"><FaStackOverflow /></a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
