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
          <h3 className={notfound.text}>
            This page you are looking for does not exist
          </h3>
          <div>
            <button onClick={navHome}>
              Back to Home Page <MdHome />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
