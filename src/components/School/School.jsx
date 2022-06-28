import { Link } from "react-router-dom";
import { CardSchoolInterface as cardSchool } from '../../Interfaces/Interfaces';
import business from "../Business/Business.module.css";
import { IoIosArrowDropright } from "react-icons/io";

const School = () => {
  const cardList = cardSchool.map((item) => {
    return (
      <div className={business.card}>
        <img src={item.image} alt={`${item.title} cbc avatar`} />
        <div className={business.text}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          <div>
            <Link to="/">
              Learn More <IoIosArrowDropright />
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={business.title}>
      <h2>For School</h2>
      <div className={business.business}>{cardList}</div>
    </div>
  );
};

export default School;
