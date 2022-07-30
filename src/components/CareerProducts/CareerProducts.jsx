import { Link } from 'react-router-dom';
import {
  MdOutlineArrowRightAlt,
  MdSchool,
  MdPodcasts,
  MdOutlineWork,
  MdOutlineHealthAndSafety,
  MdGroups,
} from 'react-icons/md';
import product from './CareerProducts.module.css';

const ProductsCareer = () => {
  return (
    <section className={product.product}>
      <h1>Benefits of working with us</h1>
      <div className={product.productAds}>
        <div className={product.productItems}>
          <div className={product.ads}>
            <MdSchool />
          </div>
          <div>
            <h2>Learning and development</h2>
            <p>
              Our comprehensive medical insurance covers you and your family
            </p>
          </div>
        </div>
        <div>
          <div className={product.productItems}>
            <div className={product.ads}>
              <MdOutlineHealthAndSafety />
            </div>
            <div>
              <h2>Health insurance</h2>
              <p>
                Our comprehensive medical insurance covers you and your family
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={product.productItems}>
            <div className={product.ads}>
              <MdPodcasts />
            </div>
            <div>
              <h2>Work anywhere</h2>
              <p>Spend more time with your family by working from home.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={product.productItems}>
            <div className={product.ads}>
              <MdGroups />
            </div>
            <div>
              <h2>Young Family Friendly</h2>
              <p>We offer flexible working hours for new parents.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={product.productItems}>
            <div className={product.ads}>
              <MdOutlineWork />
            </div>
            <div>
              <h2>Do what you love</h2>
              <p>
                Challenge yourself by exchanging ideas with the brightest minds
                in Africa.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={product.productItems}>
            <div className={product.ads}>
              <MdGroups />
            </div>
            <div>
              <h2>Smart collegues</h2>
              <p>
                Challenge yourself by exchanging ideas with the brightest minds
                in Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={product.productLink}>
        <Link to="">
          Apply <MdOutlineArrowRightAlt />
        </Link>
      </div>

      <h1>Available Vacancies</h1>
      <div className={product.vacancies1}>
        <div className={product.items}>
          <h2>Position</h2>
        </div>
        <div className={product.items}>
          <h2>Onsite / Remote</h2>
        </div>
        <div className={product.items}>
          <h2>Apply</h2>
        </div>
      </div>

      <div className={product.vacancies2}>
        <div className={product.items}>
          <div>Frontend</div>
          <div>Backend</div>
          <div>FullStack</div>
        </div>
        <div className={product.items}>
          <div>Remote</div>
          <div>Remote</div>
          <div>Onsite</div>
        </div>
        <div className={product.items}>
          <button>Apply</button>
          <button>Appy</button>
          <button>Apply</button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCareer;
