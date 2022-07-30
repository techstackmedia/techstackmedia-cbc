import Navbar from '../components/Navbar/Navbar';
import CareerHero from '../components/CareerHero/CareerHero';
import CareerProducts from '../components/CareerProducts/CareerProducts';
import Quote from '../components/Quote/Quote';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import CareerTable from '../components/CareerProducts/CareerTable';

const Career = () => {
  useEffect(() => {
    document.title = 'CBC | Careers';
  });
  return (
    <>
      <Navbar />
      <CareerHero />
      <Quote quotes="Together we will solve some of the biggest challenges in the world." />
      <CareerProducts />
      <CareerTable />
      <Footer />
    </>
  );
};

export default Career;
