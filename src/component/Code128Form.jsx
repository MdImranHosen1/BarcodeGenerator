import React, { useState } from 'react';
import bwipjs from 'bwip-js';

export const Code128Form = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const generateBarcode = () => {
        try {
            // The return value is the canvas element
            bwipjs.toCanvas('mycanvas', {
                bcid: 'code128',        // Corrected barcode type
                text: text,             // Use the user-entered value
                scale: 3,               // 3x scaling factor
                height: 20,             // Bar height, in millimeters
                width: 100,
            });
        } catch (e) {
            console.error('Error generating barcode:', e);
        }
    };

    return (
        <div className=' ml-[30px] m-5'>
            <div className="">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text">
                    Value
                </label>
                <input
                    type="text"
                    id="firstName"
                    value={text}          // Bind the input value to the state
                    onChange={handleChange} // Update the state when input changes
                    required
                    autoComplete="off"
                    placeholder="Enter the value"
                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <button
                type="button"
                className=" mt-5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={generateBarcode}
            >
                Barcode Code128
            </button>
            {/* This is where the barcode will be rendered */}
            <canvas id="mycanvas"></canvas>
        </div>
    );
};
