

import './section7.css';
import logoicon from '../Media/logo-icon.svg';
import { useState } from 'react';

const Section7 = () => {

    const [sectionClass, setSectionClass] = useState('');
   
    const invertAnimation = () => {
        setSectionClass('section7-invert');
    }
    const revertAnimation = () => {
        setSectionClass('section7-revert');
    }

    return(
        <section className = {`section ${sectionClass}`} id = 'section7'>
            <div className = 'section7-content section-content'>
                <img src = {logoicon} alt = 'logoicon' className = 'section7-icon'></img>
                <div className = 'section7-text-container'>
                    <h1>Sign Up Now</h1>
                </div>
                <a href = '/'><button onMouseEnter = {invertAnimation} onMouseLeave = {revertAnimation} className = 'section7-signup-btn'>Sign Up</button></a>
                <p className = 'section7-para'>
                    Codespaces is available in beta. 
                    Add yourself to our early-access list to be one of the first to use it.
                </p>
                <a href = '/' className = 'section7-learnmore-lbl'>Learn More about us..</a>
            </div>
        </section>
    )
}

export default Section7;