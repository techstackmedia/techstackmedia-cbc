import { Link } from 'react-router-dom';
import dropdown from './Dropdown.module.css';
import { subsidiariesLinkInterface as subLinks } from '../../Interfaces/Interfaces';

const Dropdown = () => {
  const subsidiariesLink = subLinks.map((item) => {
    return (
      <li key={item}>
        <Link to={`/subsidiaries/${item}`}>
          {item[0].toUpperCase()}
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
