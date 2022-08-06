import { Link } from 'react-router-dom';
import { AboutFocusInterface as aboutFocus } from '../../Interfaces/Interfaces';
import RecentUpdates from '../RecentUpdates/RecentUpdates';
import about from './About.module.css';

const About = () => {
  const aboutList = aboutFocus.map((aboutItem) => {
    const styleImg = {
      order: aboutItem.id % 2 === 0 ? 1 : 0,
      marginRight: aboutItem.id % 2 === 0 ? 'auto' : undefined,
    };

    const styleImage = {
      borderTopRightRadius: aboutItem.id % 2 === 0 ? 8 : undefined,
      borderBottomRightRadius: aboutItem.id % 2 === 0 ? 8 : undefined,
      borderBottomLeftRadius: aboutItem.id % 2 === 1 ? 8 : undefined,
      borderTopLeftRadius: aboutItem.id % 2 === 1 ? 8 : undefined,
    };

    const styleBlock = {
      borderTopLeftRadius: aboutItem.id % 2 === 1 ? 0 : undefined,
      borderBottomLeftRadius: aboutItem.id % 2 === 1 ? 0 : undefined,
      borderTopRightRadius: aboutItem.id % 2 === 0 ? 0 : undefined,
      borderBottomRightRadius: aboutItem.id % 2 === 0 ? 0 : undefined,
    };

    const para1Array = aboutItem.para1.split(' ');
    para1Array.splice(18, para1Array.length - 18, '...');
    const para1 = para1Array.join(' ');

    const para2Array = aboutItem.para2.split(' ');
    para2Array.splice(18, para2Array.length - 18, '...');
    const para2 = para2Array.join(' ');

    return (
      <div
        className={about.about}
        key={aboutItem.id}
        style={{ border: '1px solid #ccc', borderRadius: 8 }}
      >
        <div className={about.img} style={styleImg}>
          <img
            src={require(`../../images/about${aboutItem.id}.png`)}
            alt="about"
            width={70}
            height={50}
            style={styleImage}
          />
        </div>
        <div className={about.focus} style={styleBlock}>
          <h2>{aboutItem.subHeading}</h2>
          <div>
            <p>{para1.replace(' ...', '...').replace('....', '...')}</p>
            <p>{para2.replace(' ...', '...').replace('....', '...')}</p>
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
