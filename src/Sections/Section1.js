import './section1.css';
import video from '../Media/video1.mp4';
import {useRef} from "react";
import useOnScreen from '../useOnScreen';

const Section1 = () => {

    const ref = useRef();
    const onScreen = useOnScreen(ref, "100px");
  
    const text = document.getElementById('section1-text');
    if(text != null){
      if(onScreen){
          text.classList.add('heightUp_animation');
      }
      else{
          text.classList.remove('heightUp_animation');
      }
    }

    return (
        <section id = 'section1' className = 'section'>

            <div className = 'section-content section1-content'>
                <div ref = {ref} className = 'section-text-container section1-text-container' id = 'section1-text'>
                    <p>Certified List</p>
                    <h1>A Place to Connect Real</h1>
                    <button id = 'section1-mainbtn'>Request Early Access</button>
                </div>
                <div className = 'section-image-container section1-image-container'>
                    <div className = 'section1-video-titlebar'>
                        <svg id = 'section1-video-crossicon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                        <svg id = 'section1-video-windowicon' xmlns="http://www.w3.org/2000/svg"fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
                        </svg>
                        <svg id = 'section1-video-minusicon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                        </svg>
                    </div>
                    <video id = 'section1-video' autoPlay = {true} muted loop = {true} playsInLine controls = {false}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>

        </section>
    )
}

export default Section1;