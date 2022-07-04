import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
import { CardSubsidiariesProductsInterface as CardSubsidiariesProducts } from '../../Interfaces/Interfaces';
import business from '../Business/Business.module.css';

const SubsidiariesProducts = ({ linkText }) => {
  const cardList = CardSubsidiariesProducts.map((item) => {
    return (
      <div className={business.card} key={item.id} /*style={{ width: '15%' }}*/>
        <div className={business.img}>
          <img
            src={require(`../../images/subsidiariesProducts${item.id}.jpg`)}
            alt={`${item.title} cbc avatar`}
          />
        </div>
        <div className={business.text}>
          <h4>{item.title}</h4>
          <p style={{ height: '60%', overflowY: 'auto' }}>{item.text}</p>
          <div>
            <Link to="/">
              {linkText} <IoIosArrowDropright />
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={business.title}>
      <h2>Subsidiaries Products</h2>
      <div className={business.business}>{cardList}</div>
    </div>
  );
};

export default SubsidiariesProducts;
