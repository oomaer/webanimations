
import './section2.css';
import {useRef} from "react";
import useOnScreen from '../useOnScreen';
const Section2 = () => {

  const ref = useRef();
  const onScreen = useOnScreen(ref, "100px");


  let text = document.getElementById('section2-text');
  let circleimages = document.getElementsByClassName('circleimg');
  console.log(text);
  
  if(text !== null && circleimages !== null){
    if(onScreen){
        for(let circleimage of circleimages){
            circleimage.style.animation = '';
        }
        text.classList.add('heightUp_animation');
    }
    else{
        for(let circleimage of circleimages){
            circleimage.style.animation = 'none';
        }
        text.classList.remove('heightUp_animation');
    }
  }

    return(
        <section id = 'section2' className = 'section'>

            <div className = 'section-content section2-content'>
                <div className = 'section-text-container section2-text-container' id ='section2-text'>
                    <h1>Use the tools you love</h1>
                    <p>Connect to your codespaces from your browser or Visual Studio Code.</p>
                </div>
                <div ref = {ref} className = 'section-image-container section2-image-container'>
                    <img className = 'mainimg' id = 'section2-code-img' alt = 'code' src = 'https://github.githubassets.com/images/modules/site/codespaces/code.png'></img>
                    <img className = 'circleimg' id = 'section2-safari-icon' alt = 'safari' src = 'https://github.githubassets.com/images/modules/site/codespaces/safari.png'></img>
                    <img className = 'circleimg' id = 'section2-firefox-icon' alt = 'firefox' src =  'https://github.githubassets.com/images/modules/site/codespaces/firefox.png'></img>
                    <img className = 'circleimg' id = 'section2-chrome-icon' alt = 'chrome' src = 'https://github.githubassets.com/images/modules/site/codespaces/chrome.png' ></img>
                    <img className = 'circleimg' id = 'section2-vscode-icon' alt = 'vscode' src = 'https://github.githubassets.com/images/modules/site/codespaces/vscode.png'></img>
                    <img className = 'circleimg' id = 'section2-edge-icon' alt = 'edge' src = 'https://github.githubassets.com/images/modules/site/codespaces/edge.png'></img>

                </div>
            </div>
        </section>
    )
}

export default Section2;