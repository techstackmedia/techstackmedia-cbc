import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  NavbarLeftInterface as navLeft,
  NavbarRightInterface as navRight,
} from "../../Interfaces/NavbarInterface";
import navbar from "./Navbar.module.css";
import logo from "../../logo.svg";

const Navbar = () => {
  useEffect(() => {
    document.title = "Home | CBC";
  });
  const nR = navLeft.map((item) => {
    return (
      <>
        <li key={item} className={navbar.navLeft}>
          <Link to={`/${item}`}>{item.toUpperCase()}</Link>
        </li>
      </>
    );
  });

  const nL = navRight.map((item, index) => {
    return (
      <div key={item}>
        <li>
          <Link to={`/${item}`}>{item.toUpperCase()}</Link>
        </li>
        <div key={index} className={navbar.arrow}>
          <MdKeyboardArrowDown className={navbar.arrowDown} />
        </div>
      </div>
    );
  });

  return (
    <header className={navbar.navbar}>
      <nav>
        <ul>
          <div className={navbar.item}>
            <li>
              <Link to="/">
                <img width={148.47} height={71} src={logo} alt="cbc logo" />
              </Link>
            </li>
            {nR}
          </div>
          <div>
            <li>
              <MdSearch className={navbar.search} />
            </li>
            {nL}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
