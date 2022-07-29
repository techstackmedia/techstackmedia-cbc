import Navbar from '../components/Navbar/Navbar';
import CareerHero from '../components/CareerHero/CareerHero';
import CareerProducts from '../components/CareerProducts/CareerProducts';

import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';

const Career = () => {
    useEffect(() => {
        document.title = 'CBC | Careers'
    })
  return (
    <>
      <Navbar />
      <CareerHero />
      <CareerProducts />
      <Footer />
    </>
  );
};

export default Career;
