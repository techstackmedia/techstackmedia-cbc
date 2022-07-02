import { Link } from 'react-router-dom';
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
        backgroundColor: '#fff',
        isFlip: !cardFlip.isFlip,
      };
    });
  };

  const flipped = cardFlip.isFlip ? (
    <div
      style={{
        display: 'inlineFlex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h4 style={{ transform: 'rotateY(180deg)', margin: '0 5px' }}>
        CBC GEDU TECHNOLOGIES
      </h4>
      <p>
        Established in 1984 as City Business Computers, The CBC EMEA Group is an
        Information Technology Conglomerate with over 3 decades of experience in
        design, supply and implementation of turnkey IT, communications and
        security solutions in Africa. With a stable and experienced Board, the
        CBC Group looks, forward to more decades of providing excellent service
        and building the nation.
      </p>
      <Link
        to=""
        style={{
          transform: 'rotateY(180deg)',
          display: 'block',
          margin: '0 5px',
        }}
      >
        Read More...
      </Link>
    </div>
  ) : (
    <h3>CBC GEDU TECHNOLOGIES</h3>
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
