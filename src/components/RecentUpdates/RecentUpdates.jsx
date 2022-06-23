import { CardRecentUpdateInterface as cardRecent } from "../../Interfaces/Interfaces";
import recentUpdates from "./RecentUpdates.module.css";
const RecentUpdates = () => {
  const cardList = cardRecent.map((item) => {
    return (
      <div className={recentUpdates.cards}>
        <div>
          <img src={item.image} alt={`${item.image} avatar`} />
        </div>
        <p>{item.text}</p>
      </div>
    );
  });

  return (
    <>
      <h2 className={recentUpdates.text}>Recent Updates</h2>
      <div className={recentUpdates.recentUpdates}>{cardList}</div>
    </>
  );
};

export default RecentUpdates;
