import React from 'react';
import Intro from './Components/Intro/Intro'
import Particles from 'react-particles-js'
import About from './Components/About/About';

function App() {
    return (
        <div >
        <Particles
        style={{
        position:'fixed',
        top:0,
        left:0,
        zIndex:-1
        }}
        params={{
            "particles": {
                color: {
                    value: "#95a5a6"
                },
                "number": {
                    "value": 50
                },
                line_linked: {
                    color: {
                    value: "#95a5a6"
                    }
                },
                "size": {
                    "value": 5
                }
            }
        }} />
        <Intro /> 
        <About />
        </div>
    )
}

export default App
