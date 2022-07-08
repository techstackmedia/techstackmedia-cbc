import Card from '../../Shared/Card';
import { CoperateClientsInerface as coperateClient } from '../../Interfaces/Interfaces';
import coperate from './CoperateClients.module.css';

const CoperateClienet = () => {
  const images = coperateClient.map((img) => {
    return (
      <div className={coperate.imgs} key={img}>
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
    <section className={coperate.section}>
      <h2 className={coperate.clients}>Our Corporate Clients</h2>
      <Card className={coperate.coperate}>{images}</Card>
    </section>
  );
};

export default CoperateClienet;
