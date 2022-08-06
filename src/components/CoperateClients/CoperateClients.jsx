import { CoperateClientsInerface as coperateClient } from '../../Interfaces/Interfaces';
import coperate from './CoperateClients.module.css';

const CoperateClienet = () => {
  const images = coperateClient.map((img) => {
    return (
      <div className={coperate.imgs} key={img}>
        <img
          src={require(`../../images/image${img}.svg`)}
          alt={`logo ${img}`}
          width={60}
          height={60}
        />
      </div>
    );
  });

  return (
    <section className={coperate.section}>
      <h2 className={coperate.clients}>Our Corporate Clients</h2>
      <div className={coperate.coperate}>{images}</div>
    </section>
  );
};

export default CoperateClienet;
