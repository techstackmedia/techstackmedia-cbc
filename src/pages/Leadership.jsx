import LeaderShip from '../components/LeaderShip/LeaderShip';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';

const Leadership = () => {
  useEffect(() => {
    document.title = 'Leadership | CBC';
  });
  return (
    <>
      <LeaderShip />
      <Footer />
    </>
  );
};

export default Leadership;
