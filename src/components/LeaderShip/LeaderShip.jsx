import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import leadership from './LeaderShip.module.css';
import { leadershipInterface as leader } from '../../Interfaces/Interfaces';

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

  const leaderList = leader.map((item) => {
    return (
      <div className={leadership.board} key={item.id}>
        <div>
          <img
            src={require(`../../images/leadership${item.id}.jpg`)}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div className={leadership.para}>
          <h3>{item.heading}</h3>
          <p>{item.para1}</p>
          <p>{item.para2}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <header className={leadership.leadership}>
        <Navbar />
        <Hero title="Our Leadership" />
      </header>
      <header>
        <nav>
          <ul className={leadership.ul}>
            <li style={styleBorderBD} onClick={handleClickBorderBD}>
              Board of Directors
            </li>
            <li style={styleBorderSM} onClick={handleClickBorderSM}>
              Subsidiaries Management
            </li>
          </ul>
        </nav>
      </header>
      <section className={leadership.section1}>{leaderList}</section>
    </>
  );
};

export default Leadership;
