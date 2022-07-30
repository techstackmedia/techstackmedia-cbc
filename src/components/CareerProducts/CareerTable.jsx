import { Link } from 'react-router-dom';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import product from './CareerProducts.module.css';
const CareerTable = () => {
  return (
    <section>
      <p className={product.fact}>
        So let's see where you fit in. Discover why the brightest minds find
        home in working with us.
      </p>
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
              <div>Remote</div>
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
            <div className={product.bodyRow}>
              <div>Fullstack</div>
              <div>Onsite</div>
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

export default CareerTable;
