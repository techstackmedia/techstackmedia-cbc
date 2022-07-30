import { Link, Outlet, useLocation } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import { SocialMediaInterface as socialMedia } from '../../Interfaces/Interfaces';
import { FooterLinkInterface as footerLink } from '../../Interfaces/Interfaces';
import footer from './Footer.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Footer = () => {
  const { pathname } = useLocation();

  const styleFooterHeight = {
    height: pathname !== '/' ? 80 : undefined,
  };

  const styleFooterAbout = {
    marginTop: pathname === '/' ? 0 : undefined,
  };
  const images = socialMedia.map((media) => {
    return (
      <div className={footer.media} key={media}>
        <Link to="">
          <LazyLoadImage
            src={require(`../../images/media${media}.svg`)}
            alt={`logo ${media}`}
            width={60}
            height={60}
          />
        </Link>
      </div>
    );
  });
  const footerLinks = footerLink.map((footer) => {
    return (
      <div key={footer}>
        <Link
          style={{
            color:
              pathname === `/${footer.toLowerCase()}` ? '#0073A6' : undefined,
          }}
          to={`/${footer.toLowerCase().replaceAll(' ', '-')}`}
        >
          {footer}
        </Link>
        <Outlet />
      </div>
    );
  });

  return (
    <footer className={footer.foot} style={styleFooterAbout}>
      <div className={footer.footer} style={styleFooterHeight}>
        <div className={footer.content}>
          <div className={footer.media}>
            <div className={footer.item}>
              <MdLocationPin />
              <span>
                CBC Towers, 10/11 Olubunmi Owa Street, Lekki Phase 1, Lekki,
                Lagos
              </span>
            </div>
            <div className={footer.item}>
              <MdEmail /> <span>info@cbcemea.com</span>
            </div>
            <div className={footer.item}>
              <MdLocalPhone /> <span>+234-0909-499-8830</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={footer.links}>{footerLinks}</div>
      <div className={footer.socialMedia}>{images}</div>
      <div className={footer.copyright}>
        &copy; {new Date().getFullYear()} CBC emea. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
