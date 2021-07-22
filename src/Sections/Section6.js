
import './section6.css';
import {useRef} from "react";
import useOnScreen from '../useOnScreen';
import image1 from '../Media/section6-img1.png';
import image2 from '../Media/section6-img2.png';
import image3 from '../Media/section6-img3.png';
import circleimg1 from '../Media/section6-circleimg1.png';
import circleimg2 from '../Media/section6-circleimg2.png';
import circleimg3 from '../Media/section6-circleimg3.png';

const Section6 = () => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, "100px");
  
    const transformimage1 = document.getElementById('section6-image1');
    const transformimage2 = document.getElementById('section6-image3');
    if(transformimage1 !== null && transformimage2 !== null){
      if(onScreen){
          transformimage1.style.transform = '';
          transformimage2.style.transform = '';
      }
      else{
          transformimage1.style.transform = 'scaleX(0.5)';
          transformimage2.style.transform = 'scaleX(0.5)';
      }
    }

    return(
        <section className = 'section' id = 'section6'>
            <div className = 'section6-content section-content'>
                <div className = 'section6-text-container' id = 'section6-text'>
                    <h1>Dependencies, decluttered</h1>
                    <p>Contribute to projects without complicating your local setup. Spin up dev environments with a
                         lick—even for projects you haven't worked on before—and switch between them with ease.</p>
                </div>
            
                <div ref = {ref} className = 'section6-image-container'>
                    <img id = 'section6-image1' alt = 'img1' src = {image1}></img>
                    <img id = 'section6-image3' alt = 'img3' src = {image3}></img>
                    <img id = 'section6-image2' alt = 'img2' src = {image2}></img>
                    <img id = 'section6-circleimage1' alt = 'circleimg1' src = {circleimg1}></img>
                    <img id = 'section6-circleimage2' alt = 'circleimg2' src = {circleimg2}></img>
                    <img id = 'section6-circleimage3' alt = 'circleimg3' src = {circleimg3}></img>
                </div>
            </div>
        </section>
    )
}

export default Section6;