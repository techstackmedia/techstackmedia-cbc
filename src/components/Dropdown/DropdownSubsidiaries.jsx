import { Link, useLocation } from 'react-router-dom';
import dropdown from './Dropdown.module.css';
import { subsidiariesLinkInterface as subLinks } from '../../Interfaces/Interfaces';

const Dropdown = () => {
  const { pathname } = useLocation();
  const subsidiariesLink = subLinks.map((item) => {
    return (
      <li key={item}>
        <Link
          to={`/subsidiaries/${item}`}
          style={{
            color: pathname === `/subsidiaries/${item}` ? '#0073A6' : undefined,
          }}
        >
          CBC {item[0].toUpperCase()}
          {item.slice(1).toLowerCase()}
        </Link>
      </li>
    );
  });
  return (
    <div className={dropdown.tooltip}>
      <div className={dropdown.tooltiptext}>
        <ul>{subsidiariesLink}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
