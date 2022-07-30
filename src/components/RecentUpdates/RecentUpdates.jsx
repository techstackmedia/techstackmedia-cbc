import { useLocation } from 'react-router-dom';
import { CardRecentUpdateInterface as cardRecent } from '../../Interfaces/Interfaces';
import recentUpdates from './RecentUpdates.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RecentUpdates = () => {
  const { pathname } = useLocation();
  const styleSubTopic = {
    textAlign: pathname === '/about' ? 'center' : 'left',
  };
  const styleMarginHorizon = {
    margin: pathname === '/about' ? '20px 5% 100px' : undefined,
  };

  const cardList = cardRecent.map((item) => {
    return (
      <div className={recentUpdates.cards} key={item.id}>
        <div>
          <LazyLoadImage
            src={require(`../../images/rectangle${item.id}.png`)}
            alt={`avatar ${item.id}`}
          />
        </div>
        <p>{item.text}</p>
      </div>
    );
  });

  return (
    <>
      <h2 className={recentUpdates.text} style={styleSubTopic}>
        Recent Updates
      </h2>
      <div className={recentUpdates.recentUpdates} style={styleMarginHorizon}>
        {cardList}
      </div>
    </>
  );
};

export default RecentUpdates;
