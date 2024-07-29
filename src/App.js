import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <Nav height="150px" backgroundColor="#FFFFFF" />

      <Routes>

        <Route path="/" element={
          <>
            <Hero height="450px" backgroundColor="#495E57" rowCounts='20' rowGap='5px' rowHeight='17.75px'/>
            <Highlight height="700px" backgroundColor="#FFFFFF" rowCounts='9' rowGap='20px' rowHeight='60px'/>
            <Testimonial height="550px" backgroundColor="#495E57" rowCounts='6' rowGap='20px' rowHeight='75px'/>
            <About height="650px" backgroundColor="#FFFFFF" rowCounts='15' rowGap='10px' rowHeight='34px'/>
          </>
        }/>

        <Route path="/home" element={
          <>
            <Hero height="450px" backgroundColor="#495E57" rowCounts='20' rowGap='5px' rowHeight='17.75px'/>
            <Highlight height="700px" backgroundColor="#FFFFFF" rowCounts='9' rowGap='20px' rowHeight='60px'/>
            <Testimonial height="550px" backgroundColor="#495E57" rowCounts='6' rowGap='20px' rowHeight='75px'/>
            <About height="650px" backgroundColor="#FFFFFF" rowCounts='15' rowGap='10px' rowHeight='34px'/>
          </>
        }/>

        <Route path="/about" element={
          <>
            <AboutPage />
          </>
        }/>

        <Route path="/reservations" element={
          <>
            <BookingPage />
          </>
        }/>
      </Routes>

      <Footer height="400px" backgroundColor="#495E57" rowCounts='20' rowGap='5px' rowHeight='15.25px'/>
    </>
  );
}

export default App;
