// import { Link } from 'react-router-dom';
import { useState } from 'react';
import subsidiaries from './Subsidiaries.module.css';

const Subsidiaries = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <section className={subsidiaries.section}>
      <div className={subsidiaries.subsidiaries}>
        <div className={subsidiaries.item}>
          <h3>CBC GEDU TECHNOLOGIES</h3>
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
