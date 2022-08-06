import { useEffect } from 'react';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | CBC';
  });
  return (
    <>
      <Navbar />
      <Hero title="Contact Us" />
      <Contacts />
      <Footer />
    </>
  );
};

export default Contact;
