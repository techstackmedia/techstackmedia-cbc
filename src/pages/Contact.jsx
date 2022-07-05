import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero title="Contact us" />
      <Contacts />
      <Footer />
    </>
  );
};

export default Contact;
