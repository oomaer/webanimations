
import {useState, useEffect} from 'react';
import './section5.css';
const Section5 = () => {

    const [themeClass, setThemeClass] = useState('dark');
    const [themeImage, setThemeImage] = useState('https://github.githubassets.com/images/modules/site/codespaces/device-2.png');


    useEffect(() => {
        const switchTheme = () => {
            if(themeClass === 'dark'){
                setThemeClass('light');
                setThemeImage('https://github.githubassets.com/images/modules/site/codespaces/device-1.png');
                let svg = document.getElementById('sun-icon');
                svg.style.animation = 'none'
                setTimeout(() => { svg.style.animation = '' }, 100);
            }
            else{
                setThemeClass('dark');
                setThemeImage('https://github.githubassets.com/images/modules/site/codespaces/device-2.png');
                let svg = document.getElementById('moon-icon');
                svg.style.animation = 'none'
                setTimeout(() => { svg.style.animation = '' }, 100); 
            }
            document.getElementById('commitimg').style.animation = 'none';
            setTimeout(() => { document.getElementById('commitimg').style.animation = '' }, 100);
            
    
        }
        let timelbls = document.getElementsByClassName('time-lbl');
        
        if(themeClass === 'light'){
            setTimeout(()=> {timelbls[0].style.color = 'red'}, 1000);
            setTimeout(()=> {
                timelbls[0].style.color = '';
                timelbls[1].style.color = 'red';
            }, 2000);
            setTimeout(()=> {
                timelbls[0].style.color = '';
                timelbls[1].style.color = '';
                timelbls[2].style.color = 'red';
            }, 3000);
        }
        else{
            setTimeout(()=> {timelbls[2].style.color = 'red'}, 1000);
            setTimeout(()=> {
                timelbls[2].style.color = '';
                timelbls[1].style.color = 'red';
            }, 2000);
            setTimeout(()=> {
                timelbls[2].style.color = '';
                timelbls[1].style.color = '';
                timelbls[0].style.color = 'red';
            }, 3000);
            
        }

        setTimeout(()=> {
            timelbls[0].style.color = '';
            timelbls[1].style.color = '';
            timelbls[2].style.color = '';
            switchTheme();
        }, 4000);
        

    }, [themeClass]); // Only re-run the effect if theme class changes
    

    return (
        <section id = 'section5' className = {themeClass}>
            <div className = 'section-content'>
                
                <div className = 'section-text-container section5-text-container'>
                    <div className = 'section5-icons'>
                        <svg id = 'sun-icon' xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                        </svg>
                        <label className = 'time-lbl' id = 'time-lbl-1'>·</label>
                        <label className = 'time-lbl' id = 'time-lbl-2'>·</label>
                        <label className = 'time-lbl' id = 'time-lbl-3'>·</label>
                        <svg id = 'moon-icon' xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                        </svg>
                    </div>

                    <h1>I am Groot</h1>
                    <p>I am groot, I am groot, I am groot, I am groot, I am groot
                    I am groot, I am groot, I am groot, I am groot, I am groot, I am groot
                    </p>
                </div>

                <div className = 'section-image-container section5-image-container'>
                    <img className = 'mainimg' alt = 'pc' src = {themeImage}></img>
                    <img id = 'commitimg' alt = 'commit' src = 'https://github.githubassets.com/images/modules/site/codespaces/commit-2.png'></img>
                </div>
            </div>
            
            
        </section>
    )
}

export default Section5;