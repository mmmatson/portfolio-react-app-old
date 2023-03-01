import React from 'react';
import Card from 'react-bootstrap/Card';
import deckbuilder from '../../deckbuilder-screenshot.png';
import fitness from '../../fitness-tracker.png';
import password from '../../password-generator-screenshot.png';
import refactor from '../../refactor-code-screenshot.png';
import planner from '../../daily-planner-screenshot.png';
import weather from '../../weather-dashboard-screenshot.png';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Refactoring Code</h2></Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://mmmatson.github.io/refactor-code/">Deployed Application</Card.Link>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://github.com/mmmatson/refactor-code">GitHub Repository</Card.Link>
                </Card.Body>
                <br />
                <Card.Img variant="bottom" className="image" src={refactor} />
            </Card>
            <br />

            <Card>
                <Card.Body>
                    <Card.Title><h2>Password Generator</h2></Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://mmmatson.github.io/password-generator/">Deployed Application</Card.Link>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://github.com/mmmatson/password-generator">GitHub Repository</Card.Link>
                </Card.Body>
                <br />
                <Card.Img variant="bottom" className="image" src={password} />
            </Card>
            <br />

            <Card>
                <Card.Body>
                    <Card.Title><h2>Daily Planner</h2></Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://mmmatson.github.io/daily-planner/">Deployed Application</Card.Link>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://github.com/mmmatson/daily-planner">GitHub Repository</Card.Link>
                </Card.Body>
                <br />
                <Card.Img variant="bottom" className="image" src={planner} />
            </Card>
            <br />

            <Card>
                <Card.Body>
                    <Card.Title><h2>Weather Dashboard</h2></Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://mmmatson.github.io/weather-dashboard/">Deployed Application</Card.Link>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://github.com/mmmatson/weather-dashboard">GitHub Repository</Card.Link>
                </Card.Body>
                <br />
                <Card.Img variant="bottom" className="image" src={weather} />
            </Card>
            <br />

            <Card>
                <Card.Body>
                    <Card.Title><h2>Deck Builder Application</h2></Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://mtggroupproject.github.io/DeckBuilders/">Deployed Application</Card.Link>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://github.com/MtgGroupProject/DeckBuilders">GitHub Repository</Card.Link>
                </Card.Body>
                <br />
                <Card.Img variant="bottom" className="image" src={deckbuilder} />
            </Card>
            <br />

            <Card>
                <Card.Body>
                    <Card.Title><h2>Fitness Tracker</h2></Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://mvc-mvps-fitness-tracker.herokuapp.com/">Deployed Application</Card.Link>
                </Card.Body>
                <Card.Body>
                    <Card.Link classList="link" href="https://github.com/mvc-mvps/fitnessTracker">GitHub Repository</Card.Link>
                </Card.Body>
                <br />
                <Card.Img variant="bottom" className="image" src={fitness} />
            </Card>
            <br />
        </div>
    );
}
