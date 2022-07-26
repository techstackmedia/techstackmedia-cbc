import { Link, Outlet } from 'react-router-dom';
import {
  MdKeyboardArrowDown,
  MdShoppingCart,
  MdMenu,
  MdClose,
} from 'react-icons/md';
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
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => {
      return !prev;
    });
  };

  const handleClick1 = () => {
    if (isOpen1 === true) {
      setIsOpen2(false);
    } else if (isOpen1 === false) {
      setIsOpen1(true);
      setIsOpen2(false);
    }
  };

  const handleClick2 = () => {
    if (isOpen2 === true) {
      setIsOpen1(false);
    } else if (isOpen2 === false) {
      setIsOpen2(true);
      setIsOpen1(false);
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

  const styleMenu = {
    height: isMenuOpen ? 0 : 'auto',
    position: 'relative',
  };

  const styles1 = {
    display: isOpen1 ? 'none' : undefined,
  };

  const styles2 = {
    display: isOpen2 ? 'none' : undefined,
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
      ) : index === 0 ? (
        <div style={styles2} id={index} onMouseLeave={handleMouseLeave2}>
          <DropdownSubsidiaries />
        </div>
      ) : index === 2 ? (
        <span></span>
      ) : undefined;

    const icons =
      index === 0 || index === 1 ? (
        <div
          key={index}
          className={navbar.arrow}
          onClick={index === 0 ? handleClick1 : handleClick2}
          style={index === 1 ? rotateStyle1 : rotateStyle2}
        >
          <MdKeyboardArrowDown
            className={navbar.arrowDown}
            
          />{' '}
        </div>
      ) : (
        <a href="https://fimihan.com/shop/">
          <MdShoppingCart color="#fff" className={navbar.cart} />
        </a>
      );

    return (
      <div key={item} className={navbar.relaive}>
        <li>
          <Link to={`/${item}`}>{item.toUpperCase()}</Link>
        </li>
        {icons}
        {dropdownLinks}
      </div>
    );
  });

  return (
    <>
      <div className={navbar.menu} onClick={handleMenuClick}>
        {isMenuOpen ? <MdMenu color="#fff" /> : <MdClose />}
      </div>
      <div className={navbar.logo1}>
        <Link to="/">
          <img width={100} height={50} src={logo} alt="cbc logo" />
        </Link>
      </div>
      <div className={navbar.navbar}>
        <nav style={styleMenu}>
          <ul>
            <div className={navbar.item}>
              <div className={navbar.logo}>
                <Link to="/">
                  <img width={100} height={50} src={logo} alt="cbc logo" />
                </Link>
              </div>
              {nR}
            </div>
            <div>{nL}</div>
          </ul>
          <Outlet />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
