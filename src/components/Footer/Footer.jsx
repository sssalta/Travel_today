
import logo from "../../assets/images/travel_today_logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <a href="index.html">
            <img src={logo} alt="Travel Today" />
          </a>
        </div>
        {/* <div className="social-media">
                <a href="#"><img src="/src/images/facebook.png" alt="Facebook"/></a>
                <a href="#"><img src="/src/images/instagram.png" alt="Instagram"/></a>
            </div> */}
        <div className="contact-info">
          <p>Contact us: +123456789</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
      </div>
      <div className="copyright">
        <p>All rights reserved &copy; 2024 Travel Today</p>
      </div>
    </footer>
  );
};

export default Footer;
