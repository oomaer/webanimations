
import './section3.css';
import {useRef} from "react";
import useOnScreen from '../useOnScreen';
import image1 from '../Media/section3-img.png';
import image2 from '../Media/section3-img2.png';

const Section3 = () => {

  const ref = useRef();
  const onScreen = useOnScreen(ref, "100px");

  const animatedimage = document.getElementById('section3-img2');
  const text = document.getElementById('section3-text');
  if(animatedimage !== null && text != null){
    if(onScreen){
        animatedimage.style.animation = '';
        text.classList.add('heightUp_animation');
    }
    else{
        animatedimage.style.animation = 'none';
        text.classList.remove('heightUp_animation');
    }
  }


    return(
        <section id = 'section3' className = 'section'>

            <div className = 'section-content section3-content'>
                <div className = 'section-text-container section3-text-container' id = 'section3-text'>
                    <h1>Simplify your workflow</h1>
                    <p>Automatically set up dependencies and SSH keys. Go from code to commit faster on any project.</p>
                </div>
                <div ref = {ref} className = 'section-image-container section3-image-container'>
                    <img className = 'mainimg' id = 'section3-img' alt = 'sec3-img' src = {image1}></img>
                    <img id = 'section3-img2' alt = 'sec3-img2' src = {image2}></img>
                </div>
            </div>
        </section>
    )
}

export default Section3;