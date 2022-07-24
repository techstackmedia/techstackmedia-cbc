import { useId } from 'react';
import { MdLocationPin, MdEmail, MdLocalPhone } from 'react-icons/md';
import contacts from './Contacts.module.css';
import facebook from '../../images/media1.svg';
import linkedin from '../../images/media2.svg';
import instagram from '../../images/media3.svg';
import twitter from '../../images/media4.svg';
import youtube from '../../images/media5.svg';

const Contacts = () => {
  const id = useId();
  return (
    <section className={contacts.section}>
      <div className={contacts.contacts}>
        <h2>We're here for you!</h2>
        <p>
          At CBC Emea, it is a priority to please our consumers. Our full range
          of ICT and business solutions are geared to bring satisfaction to you,
          everywhere, everytime.
        </p>
        <p>
          Our services are available nation-wide and are tailored to meet your
          tastes and preferences. Check out our web resources to discover more
          about our products, solutions and services.
        </p>
      </div>

      <div className={contacts.enquiries}>
        <p>
          For enquiries, please fill out the form below and a member of our team
          will contact you.
        </p>
      </div>
      <div className={contacts.forms}>
        <form action="">
          <input
            className={contacts.fullname}
            type="text"
            name=""
            id={`${id}-fullName`}
            placeholder="Full Name"
          />
          <div className={contacts.emailPhoneNumber}>
            <input
              type="email"
              name=""
              id={`${id}-email`}
              placeholder="Email"
              className={contacts.email}
            />
            <input
              type="text"
              name=""
              id={`${id}-phoneNumber`}
              placeholder="Phone Number"
              className={contacts.phoneNumber}
            />
          </div>
          <textarea placeholder="Message" rows={5} cols={15} />
        </form>
        <div className={contacts.contact}>
          <p className={contacts.address}>
            <MdLocationPin /> CBC Towers, 10/11 Olubunmi Owa Street, Lekki Phase
            1, Lekki, Lagos
          </p>
          <div>
            <p className={contacts.email}>
              <MdEmail /> info@cbcemea.com
            </p>
          </div>
          <div>
            <p className={contacts.number}>
              <MdLocalPhone />
              +234-909-499-8830
            </p>
          </div>
          <div className={contacts.socialMedia}>
            <div>
              <img src={facebook} alt="facebook log" />
            </div>
            <div>
              <img src={linkedin} alt="linkedin logo" />
            </div>
            <div>
              <img src={instagram} alt="instagram logo" />
            </div>
            <div>
              <img src={twitter} alt="twitter logo" />
            </div>
            <div>
              <img src={youtube} alt="youtube logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
