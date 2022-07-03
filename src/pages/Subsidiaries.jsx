import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import SubsidiariesFocus from '../components/Subsidiaries/Subsidiaries';
import Footer from '../components/Footer/Footer';

const Subsidiaries = () => {
  useEffect(() => {
    document.title = 'Subsidiaries | CBC';
  });
  return (
    <>
      <Navbar />
      <Hero title="Our Subsidiaries" />
      <SubsidiariesFocus />
      <Footer />
    </>
  );
};

export default Subsidiaries;
