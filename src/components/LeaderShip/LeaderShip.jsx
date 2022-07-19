import { useState } from 'react';
import leadership from './LeaderShip.module.css';
import { leadershipBDInterface as leadershipBD } from '../../Interfaces/Interfaces';
import { leadershipSMInterface as leadershipSM } from '../../Interfaces/Interfaces';

const LeaderShip = () => {
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

  const leadershipList1 = leadershipBD.map((leadershipItem) => {
    const styles = {
      order: leadershipItem.id % 2 === 1 ? 0 : 1,
    };
    return (
      <div className={leadership.card} key={leadershipItem.id}>
        <div className={leadership.leadership}>
          <img
            src={require(`../../images/leadershipBD${leadershipItem.id}.jpg`)}
            alt={`CBC ${leadershipItem.office}`}
            style={styles}
          />
          <div className={leadership.text}>
            <div className={leadership.person}>
              <h2>{leadershipItem.heading}</h2>
              <h3>{leadershipItem.office}</h3>
            </div>
            <p>{leadershipItem.para}</p>
          </div>
        </div>
      </div>
    );
  });

  const leadershipList2 = leadershipSM.map((leadershipItem) => {
    const styles = {
      order: leadershipItem.id % 2 === 1 ? 0 : 1,
    };
    return (
      <div className={leadership.card} key={leadershipItem.id}>
        <div className={leadership.leadership}>
          <img
            src={require(`../../images/leadershipSM${leadershipItem.id}.jpg`)}
            alt={`CBC ${leadershipItem.office}`}
            style={styles}
          />
          <div className={leadership.text}>
            <div className={leadership.person}>
              <h2>{leadershipItem.heading}</h2>
              <h3>{leadershipItem.office}</h3>
            </div>
            <p>{leadershipItem.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
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

      <section className={leadership.section2} style={styleDisplaySM}>
        {leadershipList1}
      </section>

      <section className={leadership.section2} style={styleDisplayBD}>
        {leadershipList2}
      </section>
    </>
  );
};

export default LeaderShip;
