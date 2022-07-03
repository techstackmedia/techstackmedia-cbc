import Business from '../components/Business/Business';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import School from '../components/School/School';

const Products = () => {
  return (
    <>
      <Navbar />
      <Hero title="Our Products"/>
      <Business />
      <School />
      <Footer />
    </>
  );
};

export default Products;
