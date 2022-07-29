import { useNavigate } from 'react-router-dom';
import notfound from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();
  const navHome = () => {
    navigate('/');
  };

  return (
    <section className={notfound.section}>
      <div className={notfound.notfound}>
        <div className={notfound.notify}>
          <h2>404</h2>
          <h3 className={notfound.text}>This page does not exist</h3>
          <div>
            <button onClick={navHome}>Back to Home Page</button>
          </div>
        </div>
      </div>
      <h3 className={notfound.h3}>
        Let's not jump into conclusion, but I think the URL is misspelt or wrong
        <span role="img" aria-label="wrong page">
          🤔
        </span>
      </h3>
    </section>
  );
};

export default NotFound;
