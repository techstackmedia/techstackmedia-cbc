import { Link } from 'react-router-dom';
import { MdOutlinePlayArrow } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import heroImg from '../../images/hero.png';
import hero from './CareerHero.module.css';

const CareerHero = () => {
  return (
    <section className={hero.hero}>
      <div className={hero.jumbotron}>
        <div>
          <h1>Technology Solution Provider</h1>
          <p>
            CBC EMEA Group is the largest Information technology,
            telecommunication, energy, power, security and surveillance
            solutions provider in Nigeria.
          </p>
          <div className={hero.store}>
            <div>
              <a href="https://www.youtube.com/watch?v=NfTUnsK_-2I" target="_blank" rel="noreferrer">
                <MdOutlinePlayArrow /> Watch Video
              </a>
            </div>
            <div>
              <Link to="/about">
                Learn More
                <MdKeyboardArrowDown />
              </Link>
            </div>
          </div>
        </div>
        <div className={hero.heroImg}>
          <img
            src={heroImg}
            alt="hero section of cbc"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;