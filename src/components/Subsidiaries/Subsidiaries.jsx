import { Link } from 'react-router-dom';
import { useState } from 'react';
import { subsidiariesInterface as subSidiaries } from '../../Interfaces/Interfaces';
import subsidiaries from './Subsidiaries.module.css';

const Subsidiaries = () => {
  const [cardFlip, setCardFlip] = useState({
    transform: 'rotateY(0)',
    transformStyle: 'preserve-3d',
    backgroundColor: '#d9d9d9',
    isFlip: false,
  });

  const handleCardClickFlip = () => {
    setCardFlip((prev) => {
      return {
        ...prev,
        transform: 'rotateY(180deg)',
        backgroundColor: '#fff',
        isFlip: !cardFlip.isFlip,
      };
    });
  };

  const flipped = cardFlip.isFlip ? (
    <div className={subsidiaries.flipped}>
      <h4 style={{ transform: 'rotateY(180deg)', margin: '0 5px' }}>
        {subSidiaries[0].subHeading}
      </h4>
      <p>{subSidiaries[0].para}</p>
      <Link to="">Read More...</Link>
    </div>
  ) : (
    <h3>{subSidiaries[0].subHeading}</h3>
  );

  return (
    <section className={subsidiaries.section}>
      <div className={subsidiaries.subsidiaries}>
        <div
          className={subsidiaries.item}
          style={cardFlip}
          onClick={handleCardClickFlip}
        >
          {flipped}
        </div>
        <div className={subsidiaries.item}>
          <h3>CBC INFRASTRUCTURE</h3>
        </div>
        <div className={subsidiaries.item}>
          <h3>CBC NETCOMMS</h3>
        </div>
        <div className={subsidiaries.item}>
          <h3>CBC ENERGY</h3>
        </div>
        <div className={subsidiaries.item}>
          <h3>CBC PROPERTIES</h3>
        </div>
        <div className={subsidiaries.item}>
          <h3>CBC SURVEILLANCE</h3>
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
