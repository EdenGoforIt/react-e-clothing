import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
// you can make the image as react component
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            {' '}
            Shop
          </Link>
          <Link className="nav-link" to="/log-in">
            {' '}
            LogIn
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
