import { useState, useMemo } from 'react';
import Pagination from '../PagePagination/PagePagination';
import { blogBlogInterface as blogBlog } from '../../Interfaces/Interfaces';
import { blogNewsInterface as blogNews } from '../../Interfaces/Interfaces';
import blognews from './BlogNews.module.css';
import Search from '../Search/Search';

let BlogPageSize = 6;
let NewsPageSize = 6;

const BlogNews = () => {
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const currentBlogTableData = useMemo(() => {
    const firstPageIndex = (currentBlogPage - 1) * BlogPageSize;
    const lastPageIndex = firstPageIndex + BlogPageSize;
    return blogBlog.slice(firstPageIndex, lastPageIndex);
  }, [currentBlogPage]);

  const [currentNewsPage, setCurrentNewsPage] = useState(1);
  const currentNewsTableData = useMemo(() => {
    const firstPageIndex = (currentNewsPage - 1) * NewsPageSize;
    const lastPageIndex = firstPageIndex + NewsPageSize;
    return blogNews.slice(firstPageIndex, lastPageIndex);
  }, [currentNewsPage]);

  const [borderBD, setBorderBD] = useState('3px solid #0073a6');
  const [borderSM, setBorderSM] = useState('');
  const [displayBD, setDisplayBD] = useState('flex');
  const [displaySM, setDisplaySM] = useState('none');

  const handleClickBorderSM = () => {
    if (borderSM === '') {
      setBorderSM('3px solid #0073a6') || setBorderBD('');
      setDisplayBD('none') || setDisplaySM('flex');
    }
  };

  const handleClickBorderBD = () => {
    if (borderBD === '') {
      setBorderBD('3px solid #0073a6') || setBorderSM('');
      setDisplayBD('flex') || setDisplaySM('none');
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

  const leaderBDList = currentBlogTableData.map((item) => {
    const reduceText1 = item.para1.split(' ');
    reduceText1.splice(18, reduceText1.length - 18, '...');
    const para1 = reduceText1.join(' ').replace(' ...', '...').replace('....', '...');

    const reduceText2 = item.para2.split(' ');
    reduceText2.splice(18, reduceText2.length - 18, '...');
    const para2 = reduceText2.join(' ').replace(' ...', '...').replace('....', '...');
    return (
      <div className={blognews.board} key={item.id}>
        <div className={blognews.img}>
          <img
            src={require(`../../images/blogBlog${item.id}.jpg`)}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div className={blognews.para}>
          <h3>{item.heading}</h3>
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
    );
  });

  const leaderSMList = currentNewsTableData.map((item) => {
    const reduceText1 = item.para1.split(' ');
    reduceText1.splice(18, reduceText1.length - 18, '...');
    const para1 = reduceText1.join(' ').replace(' ...', '...').replace('....', '...');

    const reduceText2 = item.para2.split(' ');
    reduceText2.splice(18, reduceText2.length - 18, '...');
    const para2 = reduceText2.join(' ').replace(' ...', '...').replace('....', '...');

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
          <p>{para1}</p>
          <p>{para2}</p>
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
      <Search />

        {leaderBDList}
        <Pagination
          className="pagination-bar"
          currentBlogPage={currentBlogPage}
          totalCount={blogBlog.length}
          pageSize={BlogPageSize}
          onPageChange={(page) => setCurrentBlogPage(page)}
        />
      </section>
      <section className={blognews.section2} style={styleDisplaySM}>
        <Search />

        {leaderSMList}
        <Pagination
          className="pagination-bar"
          currentNewsPage={currentNewsPage}
          totalCount={blogNews.length}
          pageSize={NewsPageSize}
          onPageChange={(page) => setCurrentNewsPage(page)}
        />
      </section>
    </>
  );
};

export default BlogNews;
