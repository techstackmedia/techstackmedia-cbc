import generalmanager from '../../images/generalmanager.png';
import deputygeneralmanager from '../../images/deputygeneralmanager.png';
import management from './Management.module.css';

const Management = () => {
  return (
    <section className={management.section}>
      <h2>Management</h2>
      <div className={management.management}>
        <div className={management.card}>
          <div>
            <img src={generalmanager} alt="" />
          </div>
          <div className={management.generalmanager}>
            <h3>OPEYEMI ADESINA</h3>
            <p>Managing Director</p>
          </div>
        </div>
        <div className={management.card}>
          <div className={management.deputygeneralmanager}>
            <h3>FUNMIKE ALAWODE</h3>
            <p>Deputy General Manager</p>
          </div>
          <div>
            <img src={deputygeneralmanager} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
