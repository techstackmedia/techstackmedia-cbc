import { Link } from 'react-router-dom';
import { MdOutlinePlayArrow } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import careerHeroImg from '../../images/hero.png';
import careerHero from './Hero.module.css';

const CareerHero = () => {
  return (
    <section className={careerHero.careerHero}>
      <div className={careerHero.jumbotron}>
        <div>
          <h1>Technology Solution Provider</h1>
          <p>
            CBC EMEA Group is the largest Information technology,
            telecommunication, energy, power, security and surveillance
            solutions provider in Nigeria.
          </p>
          <div className={careerHero.store}>
            <div>
              <Link to="https://www.youtube.com/watch?v=NfTUnsK_-2I">
                <MdOutlinePlayArrow /> Watch Video
              </Link>
            </div>
            <div>
              <Link to="/about">
                Learn More
                <MdKeyboardArrowDown />
              </Link>
            </div>
          </div>
        </div>
        <div className={careerHero.careerHeroImg}>
          <img
            src={careerHeroImg}
            alt="careerHero section of cbc"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;