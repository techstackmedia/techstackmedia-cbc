import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import leadership from './LeaderShip.module.css';
import { leadershipBDInterface as leaderBD } from '../../Interfaces/Interfaces';
import { leadershipSMInterface as leaderSM } from '../../Interfaces/Interfaces';

const Leadership = () => {
  const [borderBD, setBorderBD] = useState('3px solid #0073a6');
  const [borderSM, setBorderSM] = useState('');
  const [displayBD, setDisplayBD] = useState('block');
  const [displaySM, setDisplaySM] = useState('none');

  const handleClickBorderSM = () => {
    if (borderSM === '') {
      setBorderSM('3px solid #0073a6') || setBorderBD('');
      setDisplayBD('none') || setDisplaySM('block');
    }
  };

  const handleClickBorderBD = () => {
    if (borderBD === '') {
      setBorderBD('3px solid #0073a6') || setBorderSM('');
      setDisplayBD('block') || setDisplaySM('none');
    }
  };

  const styleBorderBD = {
    borderBottom: borderBD,
  };

  const styleBorderSM = {
    borderBottom: borderSM,
  };

  const styleDisplayBD = {
    display: displayBD,
  };

  const styleDisplaySM = {
    display: displaySM,
  };

  const leaderBDList = leaderBD.map((item) => {
    return (
      <div className={leadership.board} key={item.id}>
        <div>
          <img
            src={require(`../../images/leadershipBD${item.id}.jpg`)}
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

  const leaderSMList = leaderSM.map((item) => {
    return (
      <div className={leadership.board} key={item.id}>
        <div>
          <img
            src={require(`../../images/leadershipSM${item.id}.jpg`)}
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
      <section className={leadership.section1} style={styleDisplayBD}>
        {leaderBDList}
      </section>
      <section className={leadership.section2} style={styleDisplaySM}>
        {leaderSMList}
      </section>
    </>
  );
};

export default Leadership;
