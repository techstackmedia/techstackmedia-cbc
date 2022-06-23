import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import footer from "./Footer.module.css";

const Footer = () => {
  let imageId = Array.from({ length: 4 }, (_, i) => i + 1);
  const images = imageId.map((media, index) => {
    return (
      <div className={footer.media}>
        <img
          src={`../../../assets/media${index + 1}.svg`}
          alt={`logo ${index + 1}`}
          width={60}
          height={60}
        />
      </div>
    );
  });

  return (
    <footer className={footer.foot}>
      <div className={footer.footer}>
        <div className={footer.content}>
          <div className={footer.media}>
            <div className={footer.item}>
              <MdLocationPin />{" "}
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
            <div className={footer.socialMedia}>{images}</div>
          </div>
        </div>
      </div>
      <hr />
      <div className={footer.links}>
        <div>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <Link to="/leadership">Leadership</Link>
        </div>
        <div>
          <Link to="/services">Services</Link>
        </div>
        <div>
          <Link to="/subsidiaries">Subsidiaries</Link>
        </div>
        <div>
          <Link to="/careers">Careers</Link>
        </div>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div>
          <Link to="/terms">Terms and Conditions</Link>
        </div>
      </div>
      <div className={footer.copyright}>&copy; 2022 CBC emea. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
