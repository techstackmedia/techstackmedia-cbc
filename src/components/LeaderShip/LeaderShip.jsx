import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import leadership from './LeaderShip.module.css';
import img from '../../images/business1.jpg';

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
            <li style={styleBorderBD} onClick={handleClickBorderBD}>
              Board of Directors
            </li>
            <li style={styleBorderSM} onClick={handleClickBorderSM}>
              Subsidiaries Management
            </li>
          </ul>
        </nav>
      </header>
      <section className={leadership.section}>
        <div className={leadership.board}>
          <div>
            <img src={img} alt="" width={250} height={250} />
          </div>
          <div className={leadership.para}>
            <h3>Leadership</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              minima, repudiandae aliquid consequuntur necessitatibus in
              voluptatem quia, nostrum laboriosam quaerat optio autem doloribus,
              reiciendis expedita.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={leadership.board}>
          <div>
            <img src={img} alt="" width={250} height={250} />
          </div>
          <div className={leadership.para}>
            <h3>Leadership</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              minima, repudiandae aliquid consequuntur necessitatibus in
              voluptatem quia, nostrum laboriosam quaerat optio autem doloribus,
              reiciendis expedita.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={leadership.board}>
          <div>
            <img src={img} alt="" width={250} height={250} />
          </div>
          <div className={leadership.para}>
            <h3>Leadership</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              minima, repudiandae aliquid consequuntur necessitatibus in
              voluptatem quia, nostrum laboriosam quaerat optio autem doloribus,
              reiciendis expedita.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={leadership.board}>
          <div>
            <img src={img} alt="" width={250} height={250} />
          </div>
          <div className={leadership.para}>
            <h3>Leadership</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              minima, repudiandae aliquid consequuntur necessitatibus in
              voluptatem quia, nostrum laboriosam quaerat optio autem doloribus,
              reiciendis expedita.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={leadership.board}>
          <div>
            <img src={img} alt="" width={250} height={250} />
          </div>
          <div className={leadership.para}>
            <h3>Leadership</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              minima, repudiandae aliquid consequuntur necessitatibus in
              voluptatem quia, nostrum laboriosam quaerat optio autem doloribus,
              reiciendis expedita.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
