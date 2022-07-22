import { Link } from 'react-router-dom';
import dropdown from './Dropdown.module.css';

const Dropdown = () => {
  return (
    <div className={dropdown.tooltip}>
      <div className={dropdown.tooltiptext}>
        <ul>
          <li>
            <Link to="/">CBC Energy</Link>
          </li>
          <li>
            <Link to="/">CBC Gedu Technologies</Link>
          </li>
          <li>
            <Link to="/">CBC Properties</Link>
          </li>
          <li>
            <Link to="/">CBC Netcomms</Link>
          </li>
          <li>
            <Link to="/">CBC Infrastructure</Link>
          </li>
          <li>
            <Link to="/">CBC Surveillance</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
