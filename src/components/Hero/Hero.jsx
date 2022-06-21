import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import cbcTower from "../../images/cbc.png";
import hero from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={hero.hero}>
      <div>
        <div>
          <h1>CBC</h1>
          <h3>EMEA Group</h3>
          <p>
            the largest Information technology, telecommunication, energy,
            power, security and surveillance solutions provider in Nigeria.
          </p>
          <Link to="/subsidiaries">
            Explore our Solution <IoIosArrowDropright />
          </Link>
          <div>
            <MdOutlinePlayCircleOutline />
            <Link to="/about">What's CBC about?</Link>
          </div>
        </div>
        <div>
          <img
            src={cbcTower}
            width={960.38}
            height={604.85}
            alt="cbc tower building"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
