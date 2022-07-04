import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
import { CardConnectivityInterface as CardConnectivity } from '../../Interfaces/Interfaces';
import business from '../Business/Business.module.css';

const Connectivity = () => {
  const cardList = CardConnectivity.map((item) => {
    return (
      <div className={business.card} key={item.id}>
        <div className={business.img}>
          <img
            src={require(`../../images/school${item.id}.jpg`)}
            alt={`${item.title} cbc avatar`}
          />
        </div>
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
      <h2>Better Connectivity</h2>
      <div className={business.business}>{cardList}</div>
    </div>
  );
};

export default Connectivity;
