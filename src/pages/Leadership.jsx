import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import LeaderShip from '../components/LeaderShip/LeaderShip';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

const Leadership = () => {
  useEffect(() => {
    document.title = 'Leadership | CBC';
  });
  return (
    <>
      <Navbar />
      <Hero title="Our Leadership" />
      <LeaderShip />
      <Footer />
    </>
  );
};

export default Leadership;
