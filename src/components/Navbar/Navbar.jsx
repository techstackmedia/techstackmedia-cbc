import { Link, Outlet /*useLocation*/ } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  NavbarLeftInterface as navLeft,
  NavbarRightInterface as navRight,
} from '../../Interfaces/Interfaces';
import navbar from './Navbar.module.css';
import logo from '../../logo.svg';
import NavBar from '../../Shared/NavBar';

const Navbar = () => {
  /*
  const { pathname } = useLocation();
  const style = {
    color: pathname !== '/' ? '#fff' : undefined,
  };
  */
  const nR = navLeft.map((item) => {
    return (
      <li key={item} className={navbar.navLeft}>
        <Link to={`/${item}`} /*style={style}*/>{item.toUpperCase()}</Link>
      </li>
    );
  });
  const nL = navRight.map((item, index) => {
    return (
      <div key={item} style={{ position: 'relative', left: 40 }}>
        <li>
          <Link to={`/${item}`} /*style={style}*/>{item.toUpperCase()}</Link>
        </li>
        <div key={index} className={navbar.arrow}>
          <MdKeyboardArrowDown className={navbar.arrowDown} /*style={style}*/ />
        </div>
      </div>
    );
  });

  return (
    <NavBar
      className={navbar.navbar}
      // style={{ backgroundColor: pathname !== '/' ? 'transparent' : undefined }}
    >
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
              <MdSearch className={navbar.search} /*style={style}*/ />
            </li>
            {nL}
          </div>
        </ul>
        <Outlet />
      </nav>
    </NavBar>
  );
};

export default Navbar;
