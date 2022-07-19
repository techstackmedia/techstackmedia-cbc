import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
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
      </header>
      <Carousel />
      <Footer />
    </>
  );
};

export default About;
