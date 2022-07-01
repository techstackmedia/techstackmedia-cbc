import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import leadership from './LeaderShip.module.css';
import { useState } from 'react';

const Leadership = () => {
  const [borderBD, setBorderBD] = useState('3px solid #0073a6');
  const [borderSM, setBorderSM] = useState('');

  const handleClickBorderSM = () => {
    if (borderSM === '') {
      setBorderSM('3px solid #0073a6') || setBorderBD('');
    }
  };

  const handleClickBorderBD = () => {
    if (borderBD === '') {
      setBorderBD('3px solid #0073a6') || setBorderSM('');
    }
  };

  const styleBorderBD = {
    borderBottom: borderBD,
  };

  const styleBorderSM = {
    borderBottom: borderSM,
  };
  return (
    <>
      <header className={leadership.leadership}>
        <Navbar />
        <Hero title="Our Leadership" />
      </header>
      <header>
        <nav>
          <ul className={leadership.ul}>
            <li
              style={styleBorderBD}
              onClick={handleClickBorderBD}
            >
              Board of Directors
            </li>
            <li style={styleBorderSM} onClick={handleClickBorderSM}>
              Subsidiaries Management
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Leadership;
