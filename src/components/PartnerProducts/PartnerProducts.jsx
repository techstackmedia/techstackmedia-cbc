import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
import { CardPartnerProductsInterface as cardPartnerProducts } from '../../Interfaces/Interfaces';
import business from '../Business/Business.module.css';
import Card from '../../shared/Card';

const Energy = ({ linkText }) => {
  const cardList = cardPartnerProducts.map((item) => {
    return (
      <Card className={business.card} key={item.id}>
        <div className={business.img}>
          <img
            src={require(`../../images/partnerProducts${item.id}.jpg`)}
            alt={`${item.title} cbc avatar`}
          />
        </div>
        <div className={business.text}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          <div>
            <Link to="/">
              {linkText} <IoIosArrowDropright />
            </Link>
          </div>
        </div>
      </Card>
    );
  });

  return (
    <div className={business.title}>
      <h2>Partner Products</h2>
      <div className={business.business}>{cardList}</div>
    </div>
  );
};

export default Energy;
