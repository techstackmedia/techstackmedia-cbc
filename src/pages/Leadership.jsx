import { useEffect } from 'react';
import LeaderShip from '../components/LeaderShip/LeaderShip';
import Footer from '../components/Footer/Footer';

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
