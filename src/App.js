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
      <Nav/>
      <Hero/>
      <Highlight/>
      <Testimonial/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
