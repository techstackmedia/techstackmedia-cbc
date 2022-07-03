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

  const flipped = cardFlip.isFlip
    ? subSidiaries.map((item) => {
        return (
          <div
            key={item.id}
            className={subsidiaries.item}
            style={cardFlip}
            onClick={handleCardClickFlip}
          >
            <div className={subsidiaries.flipped}>
              <h4 style={{ transform: 'rotateY(180deg)', margin: '0 5px' }}>
                {item.subHeading}
              </h4>
              <p>{item.para}</p>
              <Link to="">Read More...</Link>
            </div>
          </div>
        );
      })
    : subSidiaries.map((item) => {
        return (
          <div
            key={item.id}
            className={subsidiaries.item}
            style={cardFlip}
            onClick={handleCardClickFlip}
          >
            <h3>{item.subHeading}</h3>
          </div>
        );
      });

  return (
    <section className={subsidiaries.section}>
      <div className={subsidiaries.subsidiaries}>{flipped}</div>
    </section>
  );
};

export default Subsidiaries;
