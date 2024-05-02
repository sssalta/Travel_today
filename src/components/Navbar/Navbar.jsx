import "./Navbar.css";
import { LOGIN, PROFILE, PUBLIC, REGISTER, TOURS } from "../../utils/variables";
import logo from "../../assets/images/travel_today_logo.png";
import { useAuth } from "../../hocs/AuthProvider";
import { useNavigate } from "react-router-dom";

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
            <a href={PUBLIC}>Home</a>
          </li>
          <li>
            <a href={isAuth ? TOURS : LOGIN}>Tours</a>
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
                <a href={LOGIN} onClick={handleLogout}>
                  LogOut
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="signup">
                <a href={REGISTER}>Sign Up</a>
              </li>
              <li className="signin">
                <a href={LOGIN}>Sign In</a>
              </li>
            </>
          )}
        </ul>
        <div className="burger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
