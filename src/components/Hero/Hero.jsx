import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import cbcTower from "../../images/cbc.png";
import hero from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={hero.hero}>
      <div className={hero.jumbotron}>
        <div className={hero.cbc}>
          <h1>CBC</h1>
          <h3>EMEA Group</h3>
          <p>
            the largest Information technology, telecommunication, energy,
            power, security and surveillance solutions provider in Nigeria.
          </p>

          <Link className={hero.subsidiaries} to="/subsidiaries">
            Explore our Solution <IoIosArrowDropright />
          </Link>
          <div className={hero.about}>
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
          <div className={hero.bullet}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
