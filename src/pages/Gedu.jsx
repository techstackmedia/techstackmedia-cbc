import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Management from '../components/Management/Management';
import SubsidiariesProducts from '../components/SubsidiariesProducts/SubsidiariesProducts';
import Hero from '../components/Hero/Hero';

const Gedu = () => {
  return (
    <>
      <Navbar />
      <Hero title="Gedu Technologies" />
      <SubsidiariesProducts linkText="Explore" />
      <Management />
      <Footer />
    </>
  );
};

export default Gedu;
