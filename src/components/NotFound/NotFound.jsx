import { useNavigate } from 'react-router-dom';
import notfound from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();
  const navHome = () => {
    navigate('/');
  };

  return (
    <section>
      <div className={notfound.notfound}>
        <div className={notfound.notify}>
          <h2>404</h2>
          <h3 className={notfound.text}>This page does not exist</h3>
          <div>
            <button onClick={navHome}>Back to Home Page</button>
          </div>
        </div>
      </div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          position: 'relative',
          top: '104px',
        }}
      >
        Refer back to the home page {' '}
        <span role="img" aria-label="wrong page">
          🤔
        </span>
      </h1>
    </section>
  );
};

export default NotFound;
