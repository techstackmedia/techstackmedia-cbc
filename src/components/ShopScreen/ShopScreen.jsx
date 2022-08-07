import hero from './ShopScreen.module.css';

const Hero = () => {
  return (
    <>
      <section className={hero.section}>
        <div className={hero.jumbotron}>
          <div className={hero.hero}>
            <div className={hero.intro}>
              <div>
                <hr />
              </div>
              <p>About Us</p>
            </div>
            <p className={hero.saas}>Built for SaaS and E-commerce</p>
          </div>
          <div className={hero.tool}>
            <p>
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
          </div>
        </div>
        <div className={hero.mainText}>
          <p>
            {' '}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
            quisquam reprehenderit. that could give us{' '}
            <strong>good value</strong>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
