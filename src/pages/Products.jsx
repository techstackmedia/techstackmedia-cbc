import { useEffect } from 'react';
import Business from '../components/Business/Business';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import School from '../components/School/School';
import SubsidiariesProducts from '../components/SubsidiariesProducts/SubsidiariesProducts';
import PartnerProducts from '../components/PartnerProducts/PartnerProducts';

const Products = () => {
  useEffect(() => {
    document.title = 'Products | CBC';
  });
  return (
    <>
      <Navbar />
      <Hero title="Our Products" />
      <section>
        <Business linkText="Explore" />
        <School linkText="Explore" />
        <SubsidiariesProducts linkText="Explore" />
        <PartnerProducts linkText="Explore" />
      </section>
      <Footer />
    </>
  );
};

export default Products;
