import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight, MdOutlinePlayArrow } from 'react-icons/md';
import cbcTower from '../../images/cbc.png';
import hero from './Hero.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';

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

  const styleCBC = {
    marginLeft: pathname === '/' ? '5%' : undefined,
  };

  const styleH3 = {
    position: pathname !== '/' ? 'absolute' : undefined,
    left: pathname !== '/' ? '5%' : undefined,
    bottom: pathname !== '/' ? 30 : undefined,
  };

  const styleHero = {
    backgroundImage:
      pathname === '/contact'
        ? 'url(https://res.cloudinary.com/bizstak/image/upload/v1658215281/christina-wocintechchat-com-0Nfqp0WiJqc-unsplash_a9u9mu.jpg)'
        : pathname === '/products'
        ? 'url(https://res.cloudinary.com/bizstak/image/upload/v1658215641/austin-distel-wD1LRb9OeEo-unsplash_paa6dm.jpg)'
        : pathname === '/leadership'
        ? 'url(https://res.cloudinary.com/bizstak/image/upload/v1658214825/smartworks-coworking-Uz8THWPXwhI-unsplash_vc6of0.jpg)'
        : pathname === '/subsidiaries'
        ? 'url(https://res.cloudinary.com/bizstak/image/upload/v1658215071/jason-goodman-6awfTPLGaCE-unsplash_r8waq3.jpg)'
        : pathname === '/blog'
        ? 'url(https://res.cloudinary.com/bizstak/image/upload/v1658214377/hero4_zebnxu.jpg)'
        : pathname === '/about'
        ? 'url(https://res.cloudinary.com/bizstak/image/upload/v1658213762/hero2_a2jxsp.jpg)'
        : pathname === '/store'
        ? 'url(https://res.cloudinary.com/bizstak/image/upload/v1658213752/hero1_byitvb.jpg)'
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
        <div className={hero.cbc} style={styleCBC}>
          <h1>{heading}</h1>
          <h3 style={styleH3}>{title}</h3>
          <p>{para}</p>

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
