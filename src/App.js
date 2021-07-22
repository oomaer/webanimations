import Section5 from './Sections/Section5';
import Section2 from './Sections/Section2';
import Section4 from './Sections/Section4';
import Section1 from './Sections/Section1';
import Section3 from './Sections/Section3';
import Section6 from './Sections/Section6';
import Section7 from './Sections/Section7';
import Section8 from './Sections/Section8';
import Footer from './Sections/Footer';
import './Sections/section.css';
import './App.css';

function App() {

  // const postReq = () => {
  //   const scriptURL = 'https://sheetdb.io/api/v1/8pcbdn366pong';
  //   const form = document.forms['google-sheet']
  //   console.log(new FormData(form));
  //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //   .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  //   .catch(error => console.error('Error!', error.message))
  // }

  
  return (
    <div className="App">

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
      
    </div>
  );
}

export default App;
