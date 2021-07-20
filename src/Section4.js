
import './section4.css';

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



const Section4 = () => {
   
    const sec4_ref = useRef();
    const onScreen = useOnScreen(sec4_ref, "200px");
  
    if(document.getElementById('section4-imgback') !== null){
        if(onScreen){
            document.getElementById('section4-imgback').style.transform = '';
            document.getElementById('section4-imgfront').style.transform = '';
        }
        else{
            document.getElementById('section4-imgback').style.transform = 'scaleX(0.7)';
            document.getElementById('section4-imgfront').style.transform = 'scaleY(0.7)';
        }
    }

    return(
        <section id = 'section4' className = 'section'>

            <div className = 'section-content section4-content'>
                <div className = 'section-text-container section4-text-container'>
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