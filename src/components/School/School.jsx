import { Link } from "react-router-dom";
import business from "../Business/Business.module.css";
import { IoIosArrowDropright } from "react-icons/io";

const School = ({ card1 }) => {
  const cardList = card1.map((item) => {
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
