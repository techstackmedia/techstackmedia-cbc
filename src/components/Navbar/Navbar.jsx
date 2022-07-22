import { Link, Outlet } from 'react-router-dom';
// import { MdSearch } from 'react-icons/md';
import { MdShoppingCart } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  NavbarLeftInterface as navLeft,
  NavbarRightInterface as navRight,
} from '../../Interfaces/Interfaces';
import navbar from './Navbar.module.css';
import logo from '../../logo.svg';
import DropdownProducts from '../Dropdown/DropdownProducts';
import DropdownSubsidiaries from '../Dropdown/DropdownSubsidiaries';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  const styles = {
    display: isOpen ? 'none' : 'block',
  };

  const rotateStyle = {
    transform: isOpen ? 'rotate(0)' : 'rotate(180deg)',
  };

  const nR = navLeft.map((item) => {
    return (
      <li key={item} className={navbar.navLeft}>
        <Link to={`/${item}`}>{item.toUpperCase()}</Link>
      </li>
    );
  });

  const nL = navRight.map((item, index) => {
    const dropdownLinks =
      index === 1 ? (
        <div style={styles} id={index}>
          <DropdownProducts />
        </div>
      ) : (
        <div style={styles} id={index}>
          <DropdownSubsidiaries />
        </div>
      );
    return (
      <div key={item} style={{ position: 'relative', left: 40 }}>
        <li>
          <Link to={`/${item}`}>{item.toUpperCase()}</Link>
        </li>

        <div
          key={index}
          className={navbar.arrow}
          style={{ position: 'relative' }}
        >
          <MdKeyboardArrowDown
            className={navbar.arrowDown}
            onClick={handleClick}
            style={rotateStyle}
          />
          {dropdownLinks}
        </div>
      </div>
    );
  });

  return (
    <div className={navbar.navbar}>
      <nav>
        <ul>
          <div className={navbar.item}>
            <li>
              <Link to="/">
                <img width={100} height={100} src={logo} alt="cbc logo" />
              </Link>
            </li>
            {nR}
          </div>
          <div>
            <li>
              <Link to="/store">
                <MdShoppingCart className={navbar.search} />
              </Link>
            </li>
            {nL}
          </div>
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};

export default Navbar;
