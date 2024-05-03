import "./Navbar.css";
import { LOGIN, PROFILE, PUBLIC, REGISTER, TOURS } from "../../utils/variables";
import logo from "../../assets/images/travel_today_logo.png";
import { useAuth } from "../../hocs/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuth, logout } = useAuth();
  const nav = useNavigate();
  const handleLogout = () => {
    logout();
  };
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Travel Today" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to={PUBLIC}>Home</Link>
          </li>
          <li>
            <Link to={isAuth ? TOURS : LOGIN}>Tours</Link>
          </li>
          {isAuth ? (
            <>
              <button
                className="profile"
                onClick={() => {
                  nav(PROFILE);
                }}
              >
                P
              </button>
              <li className="signin">
                <Link to={LOGIN} onClick={handleLogout}>
                  LogOut
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="signup">
                <Link to={REGISTER}>Sign Up</Link>
              </li>
              <li className="signin">
                <Link to={LOGIN}>Sign In</Link>
              </li>
            </>
          )}
        </ul>
        <div className="burger-menu">
          <div className="bar">
            <Link to={isAuth ? TOURS : LOGIN}>Tours</Link>
          </div>
          {isAuth ? (
            <>
              <div className="bar">
                <Link to={PROFILE}>Profile</Link>
              </div>
              <div className="bar">
                <Link to={REGISTER}>Sign Up</Link>
              </div>
              <Link to={LOGIN} onClick={handleLogout}>
                LogOut
              </Link>
            </>
          ) : (
            <>
              <div className="bar">
                <Link to={REGISTER}>Sign Up</Link>
              </div>
              <div className="bar">
                <Link to={LOGIN}>Sign In</Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;