import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
var fileDownload = require('js-file-download');


export default function Resume() {
    return (
        <><h1>Resume</h1>
            <h2>Proficiencies</h2>
            <ListGroup variant="flush">
                <ListGroup.Item>HTML, CSS, JavaScript</ListGroup.Item>
                <ListGroup.Item>MySQL database, Node.js</ListGroup.Item>
                <ListGroup.Item>Progressive Web Applications, React</ListGroup.Item>
            </ListGroup>
            <br />

            <h2>Download Resume</h2>
            <br />
        </>
    );
}
