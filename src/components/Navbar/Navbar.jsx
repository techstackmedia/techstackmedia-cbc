import { Link, Outlet } from 'react-router-dom';
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
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const handleClick1 = () => {
    if (isOpen1 === true) {
      setIsOpen2(false);
    } else if (isOpen1 === false) {
      setIsOpen1(true);
      setIsOpen2(false)
    }
  };

  const handleClick2 = () => {
    if (isOpen2 === true) {
      setIsOpen1(false);
    } else if (isOpen2 === false) {
      setIsOpen2(true);
      setIsOpen1(false)

    }
  };

  const handleMouseLeave1 = () => {
    if (isOpen1 === false) {
      setIsOpen1(true);
    }
  };

  const handleMouseLeave2 = () => {
    if (isOpen2 === false) {
      setIsOpen2(true);
    }
  };

  const styles1 = {
    display: isOpen1 ? 'none' : 'block',
  };

  const styles2 = {
    display: isOpen2 ? 'none' : 'block',
  };

  const rotateStyle1 = {
    transform: isOpen1 ? 'rotate(0)' : 'rotate(180deg)',
  };

  const rotateStyle2 = {
    transform: isOpen2 ? 'rotate(0)' : 'rotate(180deg)',
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
        <div style={styles1} id={index} onMouseLeave={handleMouseLeave1}>
          <DropdownProducts />
        </div>
      ) : (
        <div style={styles2} id={index} onMouseLeave={handleMouseLeave2}>
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
            onClick={index === 0 ? handleClick1 : handleClick2}
            style={index === 1 ? rotateStyle1 : rotateStyle2}
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
            {nL}
            <li style={{ marginLeft: 40 }}>
              <Link to="/store">
                <span>STORE</span> <MdShoppingCart className={navbar.cart} />
              </Link>
            </li>
          </div>
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};

export default Navbar;
