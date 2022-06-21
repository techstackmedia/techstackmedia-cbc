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
        <li>
          <Link to={`/${item}`}>{item.toUpperCase()}</Link>
        </li>
      </>
    );
  });

  const nL = navRight.map((item) => {
    return (
      <>
        <li>
          <Link to={`/${item}`}>{item.toUpperCase()}</Link>
        </li>
        <div className={navbar.arrow}>
          <MdKeyboardArrowDown />
        </div>
      </>
    );
  });

  return (
    <header className={navbar.navbar}>
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">
                <img width={148.47} height={71} src={logo} alt="cbc logo" />
              </Link>
            </li>
            {nR}
          </div>
          <div>
            <li>
              <MdSearch />
            </li>
            {nL}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
