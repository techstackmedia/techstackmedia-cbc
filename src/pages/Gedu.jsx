import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Management from '../components/Management/Management';
import SubsidiariesProducts from '../components/SubsidiariesProducts/SubsidiariesProducts';
import Hero from '../components/Hero/Hero';

const Gedu = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Gedu Technologies"
        para="We are dedicated to providing the best Information Technology, Telecoms, Energy, Security and Surveillance Solutions in Nigeria."
      />
      <div style={{ width: '92%', margin: 'auto' }}>
        <SubsidiariesProducts linkText="Explore" />
      </div>
      <Management />
      <Footer />
    </>
  );
};

export default Gedu;
