import { useState } from 'react';
import blognews from './BlogNews.module.css';
import { blogBlogInterface as blogBlog } from '../../Interfaces/Interfaces';
import { blogNewsInterface as blogNews } from '../../Interfaces/Interfaces';

const BlogNews = () => {
  const [borderBD, setBorderBD] = useState('3px solid #0073a6');
  const [borderSM, setBorderSM] = useState('');
  const [displayBD, setDisplayBD] = useState('block');
  const [displaySM, setDisplaySM] = useState('none');

  const handleClickBorderSM = () => {
    if (borderSM === '') {
      setBorderSM('3px solid #0073a6') || setBorderBD('');
      setDisplayBD('none') || setDisplaySM('block');
    }
  };

  const handleClickBorderBD = () => {
    if (borderBD === '') {
      setBorderBD('3px solid #0073a6') || setBorderSM('');
      setDisplayBD('block') || setDisplaySM('none');
    }
  };

  const styleBorderBD = {
    borderBottom: borderBD,
  };

  const styleBorderSM = {
    borderBottom: borderSM,
  };

  const styleDisplayBD = {
    display: displayBD,
  };

  const styleDisplaySM = {
    display: displaySM,
  };

  const leaderBDList = blogBlog.map((item) => {
    return (
      <div className={blognews.board} key={item.id}>
        <div>
          <img
            src={require(`../../images/blogBlog${item.id}.jpg`)}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div className={blognews.para}>
          <h3>{item.heading}</h3>
          <p>{item.para1}</p>
          <p>{item.para2}</p>
        </div>
      </div>
    );
  });

  const leaderSMList = blogNews.map((item) => {
    return (
      <div className={blognews.board} key={item.id}>
        <div className={blognews.img}>
          <img
            src={require(`../../images/blogNews${item.id}.jpg`)}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div className={blognews.para}>
          <h3>{item.heading}</h3>
          <p>{item.para1}</p>
          <p>{item.para2}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <header>
        <nav>
          <ul className={blognews.ul}>
            <li style={styleBorderBD} onClick={handleClickBorderBD}>
              Blog
            </li>
            <li style={styleBorderSM} onClick={handleClickBorderSM}>
              News
            </li>
          </ul>
        </nav>
      </header>
      <section className={blognews.section1} style={styleDisplayBD}>
        {leaderBDList}
      </section>
      <section className={blognews.section2} style={styleDisplaySM}>
        {leaderSMList}
      </section>
    </>
  );
};

export default BlogNews;
