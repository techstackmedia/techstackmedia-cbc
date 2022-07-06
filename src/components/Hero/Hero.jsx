import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
import { MdPlayArrow } from 'react-icons/md';
import cbcTower from '../../images/cbc.png';
import hero from './Hero.module.css';

const Hero = ({ heading, title, para }) => {
  const { pathname } = useLocation();

  const styleCBC = {
    marginLeft: pathname === '/' ? '5%' : undefined,
  };

  const styleH3 = {
    position: pathname !== '/' ? 'absolute' : undefined,
    left: pathname !== '/' ? '5%' : undefined,
    bottom: pathname !== '/' ? 30 : undefined,
  };

  return (
    <div
      className={hero.hero}
      style={{
        height: pathname !== '/' ? 300 : undefined,
      }}
    >
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

          <Link
            className={hero.subsidiaries}
            to="/subsidiaries"
            style={{ display: pathname !== '/' ? 'none' : 'inline-flex' }}
          >
            Explore our Solution <IoIosArrowDropright />
          </Link>
          <div
            className={hero.about}
            style={{ display: pathname !== '/' ? 'none' : 'flex' }}
          >
            <MdPlayArrow color="#0099DC" />
            <Link to="/about">What's CBC about?</Link>
          </div>
        </div>
        <div className={hero.tower}>
          <img
            src={cbcTower}
            width={960.38}
            height={604.85}
            alt="cbc tower building"
          />
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
