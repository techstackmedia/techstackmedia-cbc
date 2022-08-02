import { Link, useLocation } from 'react-router-dom';
import dropdown from './Dropdown.module.css';
import { productsLinkInterface as proLink } from '../../Interfaces/Interfaces';

const Dropdown = () => {
  const { pathname } = useLocation();
  const productLink = proLink.map((item) => {
    const productItemsLinks = item
    .toLowerCase()
    .replace(' - ', ' ')
    .replaceAll(' ', '-')
    return (
      <li key={item}>
        <Link
          to={`/products/${productItemsLinks}`}
          style={{
            color: pathname === `/products/${productItemsLinks}` ? '#0073A6' : undefined,
          }}
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
