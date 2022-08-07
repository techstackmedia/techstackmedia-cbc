import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ShopHero from '../../components/ShopHero/ShopHero';
import ShopScreen from '../../components/ShopScreen/ShopScreen';
import ShopFacts from '../../components/ShopFacts/ShopFacts';
import ShopQuestions from '../../components/ShopQuestions/ShopQuestions';
import ShopTower from '../../components/ShopTower/ShopTower';
import './Shopping.css'


const About = () => {
  useEffect(() => {
    document.title = 'Store | CBC';
  });

  return (
    <div className='Shopping'>
      <header>
        <Navbar />
      </header>
      <ShopHero />
      <ShopScreen />
      <ShopTower />
      <ShopFacts />
      <ShopQuestions />
      <Footer />
    </div>
  );
};

export default About;
