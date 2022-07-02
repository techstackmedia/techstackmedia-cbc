// import { Link } from 'react-router-dom';
import { useState } from 'react';
import subsidiaries from './Subsidiaries.module.css';

const Subsidiaries = () => {
  const [cardFlip, setCardFlip] = useState({
    transform: 'rotateY(0)',
    transformStyle: 'preserve-3d',
    backgroundColor: undefined,
    isFlip: false,
  });

  const handleCardClickFlip = () => {
    setCardFlip((prev) => {
      return {
        ...prev,
        transform: 'rotateY(180deg)',
        backgroundColor: 'transparent',
        isFlip: !cardFlip.isFlip,
      };
    });
  };

  const handleCardClick = () => {
    handleCardClickFlip();
  };

  const flipped = cardFlip.isFlip ? (
    <h3 style={{ transform: 'rotateY(180deg)' }}>CBC GEDU TECHNOLOGIES</h3>
  ) : (
    <h3>Hello</h3>
  );

  return (
    <section className={subsidiaries.section}>
      <div className={subsidiaries.subsidiaries}>
        <div
          className={subsidiaries.item}
          style={cardFlip}
          onClick={handleCardClick}
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
