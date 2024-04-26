import React, { useEffect } from 'react';
import './App.css';
import bwipjs from 'bwip-js';

function App() {
    useEffect(() => {
        try {
            // The return value is the canvas element
            let canvas = bwipjs.toCanvas('mycanvas', {
                bcid: 'code128',       // Barcode type
                text: '0123456789',    // Text to encode
                scale: 3,              // 3x scaling factor
                height: 10,            // Bar height, in millimeters
                includetext: true,     // Show human-readable text
                textxalign: 'center',  // Always good to set this
            });
        } catch (e) {
            console.error('Error generating barcode:', e);
        }
    }, []); // Run once on component mount

    return (
        <div className="App">
            <header className="App-header">
                <p>Barcode:</p>
                <canvas id="mycanvas"></canvas>
            </header>
        </div>
    );
}

export default App;
