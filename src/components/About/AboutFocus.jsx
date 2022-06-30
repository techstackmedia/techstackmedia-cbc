import { Link } from 'react-router-dom';
import { AboutFocusInterface as aboutFocus } from '../../Interfaces/Interfaces';
import RecentUpdates from '../RecentUpdates/RecentUpdates';
import about from './AboutFocus.module.css';

const About = () => {
  const aboutList = aboutFocus.map((aboutItem) => {
    return (
      <div className={about.about} key={aboutItem.id}>
        <div className={about.img}>
          <img
            src={require(`../../images/about${aboutItem.id}.png`)}
            alt="about"
            width={70}
            height={50}
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
      </div>
    );
  });
  const removed  = aboutList.pop()
  return (
    <>
      <section className={about.section}>
        {aboutList}
      </section>
      <h1 className={about.moments}>Moments in CBC</h1>
      <div className={about.removed}>{removed}</div>
      <RecentUpdates />
    </>
  );
};

export default About;
