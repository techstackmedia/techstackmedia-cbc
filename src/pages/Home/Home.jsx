import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Business from '../../components/Business/Business';
import School from '../../components/School/School';
import RecentUpdates from '../../components/RecentUpdates/RecentUpdates';
import CoperateClienet from '../../components/CoperateClients/CoperateClients';
import Email from '../../components/Email/Email';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | CBC';
  });
  return (
    <>
      <header style={{ position: 'relative' }}>
        <Navbar />
        <Hero
          heading="Higher Services"
          title="EMEA GROUP"
          para="the largest Information technology, telecommunication, energy, power, security and surveillance solutions provider in Nigeria."
        />
      </header>
      <section>
        <Business />
        <RecentUpdates />
        <School />
      </section>
      <CoperateClienet />
      <Email />
      <Footer />
    </>
  );
};

export default Home;
