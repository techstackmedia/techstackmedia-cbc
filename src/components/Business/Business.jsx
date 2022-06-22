import { Link } from "react-router-dom";
import { CardBusinessInterface as cardBusiness } from "../../Interfaces/NavbarInterface";
import business from "./Business.module.css";
import { IoIosArrowDropright } from "react-icons/io";

const Business = () => {
  const cardList = cardBusiness.map((item) => {
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
      <h2>For Business</h2>
      <div className={business.business}>{cardList}</div>
    </div>
  );
};

export default Business;
