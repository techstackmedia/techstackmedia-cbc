import management from './Management.module.css';
import { managementGeduInterface as gedu } from '../../Interfaces/Interfaces';

const Management = () => {
  const geduList = gedu.map((geduItem) => {
    // const geduStyles = {
    //   order: geduItem.id % 2 === 0 ? 1 : undefined,
    // };
    return (
      <div className={management.card} key={geduItem.id}>
        <div className={geduItem.id % 2 === 0 && management.order}>
          <img
            src={require(`../../${geduItem.image}`)}
            alt={`${geduItem.position} avatar`}
          />
        </div>
        <div className={management.manager}>
          <h3>{geduItem.name.toUpperCase()}</h3>
          <p>{geduItem.position}</p>
        </div>
      </div>
    );
  });
  return (
    <section className={management.section}>
      <h2>Management</h2>
      <div className={management.management}>{geduList}</div>
    </section>
  );
};

export default Management;
