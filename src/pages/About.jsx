import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
const About = () => {
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
