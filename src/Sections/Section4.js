
import './section4.css';
import { useRef } from "react";
import useOnScreen from '../useOnScreen';

const Section4 = () => {
   
    const sec4_ref = useRef();
    const onScreen = useOnScreen(sec4_ref, "100px");

    const text = document.getElementById('section4-text');
    const image1 = document.getElementById('section4-imgback');
    const image2 = document.getElementById('section4-imgfront');
    
    if(image1 !== null && text !== null && image2 !== null){
        if(onScreen){
            image1.style.transform = '';
            image2.style.transform = '';
            text.classList.add('heightUp_animation');
        }
        else{
            image1.style.transform = 'scaleX(0.7)';
            image2.style.transform = 'scaleY(0.7)';
            text.classList.remove('heightUp_animation');
        }
    }

    return(
        <section id = 'section4' className = 'section'>

            <div className = 'section-content section4-content'>
                <div className = 'section-text-container section4-text-container' id = 'section4-text'>
                    <h1>Extend and customize</h1>
                    <p>Configure your editor with dotfiles and 
                        extensions to create a consistent environment in every codespace.
                    </p>
                </div>
                <div ref = {sec4_ref} className = 'section-image-container section4-image-container'>
                    <img id = 'section4-imgback' className = 'mainimg' alt = '' src = 'https://github.githubassets.com/images/modules/site/codespaces/extensions-1.png'></img>
                    <img id = 'section4-imgfront' alt = '' src = 'https://github.githubassets.com/images/modules/site/codespaces/extensions-2.png'></img>
                    <img id = 'section4-extension1' className = 'sec4-circleimg' alt = '' src = 'https://github.githubassets.com/images/modules/site/codespaces/extension-1.png'></img>
                    <img id = 'section4-extension2' className = 'sec4-circleimg' alt = '' src = 'https://github.githubassets.com/images/modules/site/codespaces/extension-2.png'></img>
                    <img id = 'section4-extension3' className = 'sec4-circleimg' alt = '' src = 'https://github.githubassets.com/images/modules/site/codespaces/extension-3.png'></img>
                    <img id = 'section4-extension4' className = 'sec4-circleimg' alt = '' src = 'https://github.githubassets.com/images/modules/site/codespaces/extension-4.png'></img>
                </div>
            </div>
        </section>
    )
}

export default Section4;