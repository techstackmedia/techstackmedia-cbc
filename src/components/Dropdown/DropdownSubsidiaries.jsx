import { Link } from 'react-router-dom';
import dropdown from './Dropdown.module.css';
import { subsidiariesLinkInterface as subLinks } from '../../Interfaces/Interfaces';

const Dropdown = () => {
  const subsidiariesLink = subLinks.map((item) => {
    return (
      <li key={item}>
        <Link to={`subsidiaries/${item}`}>CBC {item.toUpperCase()}</Link>
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
