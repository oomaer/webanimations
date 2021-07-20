
import './section2.css';
import { useState, useEffect, useRef } from "react";
// Hook
function useOnScreen(ref, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      let observerRef = null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observerRef = ref.current;
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(observerRef);
      };
    }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}



const Section2 = () => {
     // Ref for the element that we want to detect whether on screen
  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen = useOnScreen(ref, "200px");


    if(onScreen){
        let circleimages = document.getElementsByClassName('circleimg');
        for(let circleimage of circleimages){
            circleimage.style.animation = '';
        }
      
    }
    else{
        let circleimages = document.getElementsByClassName('circleimg');
        for(let circleimage of circleimages){
            circleimage.style.animation = 'none';
        }
     
    }


    return(
        <section id = 'section2' className = 'section'>

            <div className = 'section-content section2-content'>
                <div className = 'section-text-container section2-text-container'>
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