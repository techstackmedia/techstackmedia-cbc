import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';

const About = () => {
  useEffect(() => {
    document.title = 'Store | CBC';
  });

  return (
    <>
      <header>
        <Navbar />
        <Hero title="Store" />
      </header>
      <Carousel />
      <Footer />
    </>
  );
};

export default About;
