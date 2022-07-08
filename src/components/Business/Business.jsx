import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
import { CardBusinessInterface as cardBusiness } from '../../Interfaces/Interfaces';
import Card from '../../shared/Card';
import business from './Business.module.css';

const Business = () => {
  const cardList = cardBusiness.map((item) => {
    return (
      <Card className={business.card} key={item.id}>
        <div className="img">
          <img
            src={require(`../../images/business${item.id}.jpg`)}
            alt={`${item.title} cbc avatar`}
          />
        </div>
        <div className={business.text}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          <div>
            <Link to="/">
              Explore <IoIosArrowDropright />
            </Link>
          </div>
        </div>
      </Card>
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
