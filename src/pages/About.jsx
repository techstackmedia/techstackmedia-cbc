import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import AboutFocus from '../components/About/AboutFocus';

const About = () => {
  useEffect(() => {
    document.title = 'About | CBC';
  });

  return (
    <>
      <header>
        <Navbar />
        <Hero title="About Us" />
      </header>
      <AboutFocus />
      <Footer />
    </>
  );
};

export default About;
