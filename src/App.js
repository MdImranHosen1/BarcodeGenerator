import React, { useEffect } from 'react';
import './App.css';
import { PDF417Form } from './component/PDF417Form';
import { UpperCase } from './component/UpperCase';
import { Code128Form } from './component/Code128Form';


function App() {
    

    return (
        <div className="App">
           <div className=' mb-40'>  <UpperCase/></div>
            <div>
            
              <PDF417Form></PDF417Form>
            </div>
            <div>
              <Code128Form/>
            </div>
            
        </div>
    );
}

export default App;
