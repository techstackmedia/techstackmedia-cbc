import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Business from '../../components/Business/Business';
import School from '../../components/School/School';
import RecentUpdates from '../../components/RecentUpdates/RecentUpdates';
import CoperateClienet from '../../components/CoperateClients/CoperateClients';
import Email from '../../components/Email/Email';
import Footer from '../../components/Footer/Footer';
import './Hero.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | CBC';
  });
  return (
    <div className="Hero">
      <header>
        <Navbar />
        <Hero
          heading="Higher Services"
          title="EMEA GROUP"
          para="the largest Information technology, telecommunication, energy, power, security and surveillance solutions provider in Nigeria."
        />
      </header>
      <section>
        <div>
          <Business />
        </div>
        <RecentUpdates />
        <School linkText="Explore" />
      </section>
      <CoperateClienet />
      <Email />
      <Footer />
    </div>
  );
};

export default Home;
