import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

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
      <Footer />
    </>
  );
};

export default About;
