import { useLocation } from 'react-router-dom';
import Card from '../../Shared/Card';
import { CardRecentUpdateInterface as cardRecent } from '../../Interfaces/Interfaces';
import recentUpdates from './RecentUpdates.module.css';
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
      <Card className={recentUpdates.cards} key={item.id}>
        <div>
          <img
            src={require(`../../images/rectangle${item.id}.png`)}
            alt={`avatar ${item.id}`}
          />
        </div>
        <p>{item.text}</p>
      </Card>
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
