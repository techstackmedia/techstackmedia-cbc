import { Link } from 'react-router-dom';
import dropdown from './Dropdown.module.css';

const Dropdown = () => {
  return (
    <div className={dropdown.tooltip}>
      <div className={dropdown.tooltiptext}>
        <ul>
          <li>
            <Link to="/">GDPR - Certified Data Protection Officier</Link>
          </li>
          <li>
            <Link to="/">Data Protection (NDPR)</Link>
          </li>
          <li>
            <Link to="/">Veritas Solution</Link>
          </li>
          <li>
            <Link to="/">ClickSAT Satellite Internet Service</Link>
          </li>
          <li>
            <Link to="/">CBC Digital Office Worker</Link>
          </li>
          <li>
            <Link to="/">Educational Technology Innovation</Link>
          </li>
          <li>
            <Link to="/">Priviledged Access Solution</Link>
          </li>
          <li>
            <Link to="/">Smash Protect</Link>
          </li>
          <li>
            <Link to="/">Sensaphone</Link>
          </li>
          <li>
            <Link to="/">iCOM</Link>
          </li>
          <li>
            <Link to="/">Servision</Link>
          </li>
          <li>
            <Link to="/">Blunet</Link>
          </li>
          <li>
            <Link to="/">IBM Solutions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
