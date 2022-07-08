import { Link } from 'react-router-dom';
import { AboutFocusInterface as aboutFocus } from '../../Interfaces/Interfaces';
import RecentUpdates from '../RecentUpdates/RecentUpdates';
import Card from '../../shared/Card';
import about from './About.module.css';

const About = () => {
  const aboutList = aboutFocus.map((aboutItem) => {
    const styleImg = {
      order: aboutItem.id % 2 === 0 ? 1 : 0,
      marginRight: aboutItem.id % 2 === 0 ? 'auto' : undefined,
    };

    const styleImage = {
      borderTopLeftRadius: aboutItem % 2 === 0 ? undefined : 8,
      borderBottomRightRadius: aboutItem % 2 === 0 ? undefined : 8,
    };

    // const styleFocus = {
    //   borderRadius: 8,
    // };
    return (
      <Card className={about.about} key={aboutItem.id}>
        <div className={about.img} style={styleImg}>
          <img
            src={require(`../../images/about${aboutItem.id}.png`)}
            alt="about"
            width={70}
            height={50}
            style={styleImage}
          />
        </div>
        <div className={about.focus}>
          <h2>{aboutItem.subHeading}</h2>
          <div>
            <p>{aboutItem.para1}</p>
            <p>{aboutItem.para2}</p>
          </div>
          <div>
            <div className={about.link}>
              <Link to="">Read more...</Link>
            </div>
          </div>
        </div>
      </Card>
    );
  });
  const removed = aboutList.pop();
  return (
    <>
      <section className={about.section}>{aboutList}</section>
      <h1 className={about.moments}>Moments in CBC</h1>
      <div className={about.removed}>{removed}</div>
      <RecentUpdates />
    </>
  );
};

export default About;
