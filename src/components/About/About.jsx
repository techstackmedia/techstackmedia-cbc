import { Link } from 'react-router-dom';
import { AboutFocusInterface as aboutFocus } from '../../Interfaces/Interfaces';
import RecentUpdates from '../RecentUpdates/RecentUpdates';
import about from './About.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


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

    return (
      <div
        className={about.about}
        key={aboutItem.id}
        style={{ border: '1px solid #ccc', borderRadius: 8 }}
      >
        <div className={about.img} style={styleImg}>
          <LazyLoadImage
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
