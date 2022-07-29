import { Link } from 'react-router-dom';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';
import { MdPodcasts } from 'react-icons/md';
import { MdPhoneIphone } from 'react-icons/md';
import product from './CareerProducts.module.css';

const ProductsCareer = () => {
  return (
    <section className={product.product}>
      <div className={product.productAds}>
        <div className={product.productItems}>
          <div className={product.ads}>
            <MdSchool />
          </div>
          <div>
            <h2>EASYSTUDY </h2>
            <p>
              Take learning beyond the physical realm by online collaborations,
              exchange of materials and assessments! Don't be limited! Avoid
              confining your educational institution or school to the old-styled
              method of a physical teacher-student meeting point exclusively
            </p>
          </div>
        </div>
        <div>
          <div className={product.productItems}>
            <div className={product.ads}>
              <MdPhoneIphone />
            </div>
            <div>
              <h2>CBC BLUSLATE</h2>
              <p>
                CBC Blueslate, our sleeky, world class smartphone (Android)
                tablet has served thousands of teachers and students accross
                Nigeria; taking learning and to a higher level, It contains
                pre-loaded students and pedagogical apps
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
              <h2>CLICKSAT</h2>
              <p>
                Nigeria's number one choice for broadband satellite internet
                service. We believe everything and everyone can be connected—
                even in the hardest-to-reach places in Nigeria. With ClickSAT
                High Throughput Satellite, get as high as 100Mbps on one modem
                for your business and home use
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={product.productLink}>
        <Link to="/product">
          More Products <MdOutlineArrowRightAlt />
        </Link>
      </div>
    </section>
  );
};

export default ProductsCareer;
