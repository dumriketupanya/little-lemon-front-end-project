import './App.css';
import Nav from './components/Nav.js'
import Hero from './components/Hero.js'
import Highlight from './components/Highlight.js';
import Testimonial from './components/Testimonial.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

function App() {

  return (
    <>
      <Nav height="150px" backgroundColor="#FFFFFF"/>
      <Hero height="450px" backgroundColor="#495E57" rowCounts='20' rowGap='5px' rowHeight='17.75px'/>
      <Highlight height="700px" backgroundColor="#FFFFFF"  rowCounts='9' rowGap='20px' rowHeight='60px'/>
      <Testimonial height="550px" backgroundColor="#495E57" rowCounts='6' rowGap='20px' rowHeight='75px'/>
      <About height="650px" backgroundColor="#FFFFFF" rowCounts='15' rowGap='10px' rowHeight='34px'/>
      <Footer height="400px" backgroundColor="#495E57" rowCounts='20' rowGap='5px' rowHeight='15.25px'/>
    </>
  );
}

export default App;
