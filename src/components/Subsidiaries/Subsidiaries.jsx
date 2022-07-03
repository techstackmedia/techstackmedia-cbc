import { useState } from 'react';
import { Link } from 'react-router-dom';
import { subsidiariesInterface as subSidiaries } from '../../Interfaces/Interfaces';
import subsidiaries from './Subsidiaries.module.css';

const Subsidiaries = () => {
  const [cardFlip, setCardFlip] = useState({
    transformStyle: 'preserve-3d',
    backgroundColor: '#d9d9d9',
    isFlip: false,
  });
  const handleCardClick = (id) => {
    setCardFlip((prev) => {
      return {
        ...prev,
        transform: 'rotateY(180deg)',
        backgroundColor: '#fff',
        isFlip: !prev.isFlip,
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
            onClick={() => handleCardClick(item.id)}
          >
            <div className={subsidiaries.flipped}>
              <h4>{item.subHeading}</h4>
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
            onClick={() => handleCardClick(item.id)}
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
