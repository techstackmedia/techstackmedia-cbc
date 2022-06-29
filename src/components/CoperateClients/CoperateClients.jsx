import coperate from './CoperateClients.module.css';
import { CoperateClientsInerface as coperateClient } from '../../Interfaces/Interfaces';

const CoperateClienet = () => {
  const images = coperateClient.map((img) => {
    return (
      <div className={coperate.imgs}>
        <img
          src={require(`../../images/image${img}.svg`)}
          alt={`logo ${img.id}`}
          width={60}
          height={60}
        />
      </div>
    );
  });

  return (
    <section>
      <h2 className={coperate.clients}>Our Corporate Clients</h2>
      <div className={coperate.coperate}>{images}</div>
    </section>
  );
};

export default CoperateClienet;
