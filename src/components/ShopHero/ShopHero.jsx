import { MdPlayArrow } from 'react-icons/md';
import shophero from './ShopHero.module.css';
import img from '../../images/leadershipBD5.jpg';
const ShopHero = () => {
  return (
    <section className={shophero.section}>
      <div className={shophero.shophero}>
        <div className={shophero.jumbotronText}>
          <h1>Shop and be Satisfied</h1>
          <div className={shophero.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quasi harum necessitatibus recusandae eos laboriosam corrupti
              culpa eligendi quos assumenda.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              earum, velit aliquam minus iste explicabo tenetur ipsa id possimus
              ea?
            </p>
          </div>
          <div className={shophero.button}>
            <a href="https://fimihan.com/shop" target="_blank" rel="noreferrer">
              Get Started
            </a>
          </div>
        </div>
        <div className={shophero.jumbotronImg}>
          <div>
            <img src={img} alt="shopping person" />
            <MdPlayArrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
