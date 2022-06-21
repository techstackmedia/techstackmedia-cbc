import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import {
  NavbarLeftInterface as navLeft,
  NavbarRightInterface as navRight,
} from "../../Interfaces/NavbarInterface";
import navbar from "./Navbar.module.css";

import logo from "../../logo.svg";

const Navbar = () => {
  const nR = navLeft.map((item) => {
    return (
      <>
        <li>
          <Link to={`/${item}`}>{item}</Link>
        </li>
      </>
    );
  });

  const nL = navRight.map((item) => {
    return (
      <>
        <li>
          <Link to={`/${item}`}>{item}</Link>
        </li>
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
                <img src={logo} alt="cbc logo" />
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
