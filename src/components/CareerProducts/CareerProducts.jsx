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

      <div className={product.vacancies}>
      <h1>Available Vacancies</h1>
      <div className={product.table}>
        <div className={product.head}>
          <div className={product.headRow}>
            <h2>Position</h2>
            <h2>Onsite / Remote</h2>
            <h2>Apply</h2>
          </div>
        </div>
        <div className={product.body}>
          <div className={product.bodyRow}>
            <div>Front end</div>
            <div>Onsite</div>
            <div>
              <button>Apply</button>
            </div>
          </div>
          <div className={product.bodyRow}>
            <div>Backend end</div>
            <div>Onsite</div>
            <div>
              <button>Apply</button>
            </div>
          </div>
          <div className={product.bodyRow}>
            <div>Backend end</div>
            <div>Remote</div>
            <div>
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProductsCareer;
