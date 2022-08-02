import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight, MdOutlinePlayArrow } from 'react-icons/md';
import cbcTower from '../../images/cbc.png';
import hero from './Hero.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import contactImage from '../../images/contact.jpeg';
import productsImage from '../../images/products.jpeg';
import leadershipImage from '../../images/leadership.jpeg';
import subsidiariesImage from '../../images/subsidiaries.jpeg';
import blogImage from '../../images/blog.jpeg';
import aboutImage from '../../images/about.jpeg';
import storeImage from '../../images/store.jpeg';
// import { subsidiariesInterface as sub, productsLinkInterface as pro } from '../../Interfaces/Interfaces';
const Hero = ({ heading, title, para }) => {
  const [isPlayed, setIsPlayed] = useState(true);
  const handleVideoClick = () => {
    if (isPlayed === true) {
      setIsPlayed(false);
    }
  };

  const handleVideoMouseLeave = () => {
    if (isPlayed === false) {
      setIsPlayed(true);
    }
  };

  const videoToggleStyle = {
    display: isPlayed ? 'none' : 'block',
  };

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/subsidiaries');
  };

  const styleP = {
    marginTop: pathname !== '/' ? 200 : undefined,
  };

  const styleH3 = {
    position: pathname !== '/' ? 'absolute' : undefined,
    left: pathname !== '/' ? '5%' : undefined,
    bottom: pathname !== '/' ? 30 : undefined,
    textAlign: pathname === '/' ? 'center' : undefined,
  };

  const styleHero = {
    backgroundImage:
      pathname === '/contact'
        ? `url(${contactImage})`
        : pathname === '/products'
        ? `url(${productsImage})`
        : pathname === '/leadership'
        ? `url(${leadershipImage})`
        : pathname === '/subsidiaries'
        ? `url(${subsidiariesImage})`
        : pathname === '/blog'
        ? `url(${blogImage})`
        : pathname === '/about'
        ? `url(${aboutImage})`
        : pathname === '/store'
        ? `url(${storeImage})`
        : undefined,
    height: pathname !== '/' ? 300 : undefined,
  };

  return (
    <div className={hero.hero} style={styleHero}>
      <div
        className={hero.jumbotron}
        style={{
          alignItems: pathname !== '/' ? 'flex-end' : undefined,
          marginTop: pathname !== '/' ? -207 : undefined,
        }}
      >
        <div className={hero.cbc}>
          <h1>{heading}</h1>
          <h3 style={styleH3}>{title}</h3>
          <p style={styleP}>{para}</p>

          <div className={hero.buttons}>
            <button
              className={hero.subsidiaries}
              onClick={handleVideoClick}
              style={{
                display: pathname !== '/' ? 'none' : 'inline-flex',
                width: 250,
              }}
            >
              Watch Video <MdOutlinePlayArrow />
            </button>

            <button
              className={hero.subsidiaries}
              onClick={handleButtonClick}
              style={{
                display: pathname !== '/' ? 'none' : 'inline-flex',
                width: 250,
              }}
            >
              Explore our Solution <MdKeyboardArrowRight />
            </button>
          </div>

          <div
            className={hero.about}
            style={{ display: pathname !== '/' ? 'none' : 'flex' }}
          ></div>
        </div>
        <div className={hero.tower}>
          <img
            src={cbcTower}
            width={960.38}
            height={604.85}
            alt="cbc tower building"
          />
        </div>
        <div style={videoToggleStyle} onMouseLeave={handleVideoMouseLeave}>
          <Modal />
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  title: 'About Us',
};

Hero.prototype = {
  heading: PropTypes.string,
  title: PropTypes.string.isRequired,
  para: PropTypes.string,
};

export default Hero;
