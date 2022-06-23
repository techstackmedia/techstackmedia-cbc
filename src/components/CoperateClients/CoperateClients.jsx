import coperate from "./CoperateClients.module.css";

const CoperateClienet = () => {
  let imageId = Array.from({ length: 19 }, (_, i) => i + 1);
  const images = imageId.map((img, index) => {
    return (
      <div className={coperate.imgs}>
        <img
          src={`../../../assets/image${index + 1}.svg`}
          alt={`logo ${index + 1}`}
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
