import { Link } from 'react-router-dom';
import dropdown from './Dropdown.module.css';
import { productsLinkInterface as proLink } from '../../Interfaces/Interfaces';

const Dropdown = () => {
  const productLink = proLink.map((item) => {
    return (
      <li key={item}>
        <Link
          to={`/products/${item.toLowerCase().replace(' - ', ' ').replaceAll(' ', '-')}`}
        >
          {item}
        </Link>
      </li>
    );
  });
  return (
    <div className={dropdown.tooltip}>
      <div className={dropdown.tooltiptext}>
        <ul>{productLink}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
