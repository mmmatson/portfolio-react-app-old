import React from 'react';
import bio from '../../Maggie-Matson.png';


export default function About() {
    return (
        <div>
            <img src={bio} className="App-logo" alt="logo" />
            <h1>About Me</h1>
            <p>My name is Maggie Matson and I currently work at Northwestern University as a Project Manager on a team that develops online health interventions.</p>
        </div>
    );
}
