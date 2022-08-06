import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import NotFoundPage from '../components/NotFound/NotFound';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page not found - 404 | CBC';
  });
  return (
    <>
      <Navbar />
      <NotFoundPage />
      <Footer />
    </>
  );
};

export default NotFound;
