import tower from './ShopTower.module.css';

const TowerAbout = () => {
  return (
    <section>
      <div className={tower.towerAbout}>
        <div className={tower.image}>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1654332649/cbc-tower_fpt5xb.jpg"
            alt="CBC tower"
            width={400}
            height={400}
          />
        </div>
        <div className={tower.text}>
          <h3>CBC Towers - Ultra-Modern Storey Building</h3>
          <p>
            CBC Towers dots the skyline of the highbrow Lekki Peninsula in
            Metropolitan Lagos. The tower is home to multinational and local
            organisations who have a penchant for ambience and impeccable
            facility management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TowerAbout;
