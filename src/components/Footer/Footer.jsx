import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../../../public/logo_2.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          {/* Firts Part */}
          <div className="row">
            {/* About Us Coloumn */}
            <div className="col-lg-4">
              <div className="about-us">
                <h2>About Us</h2>
                <p>
                  orporate clients and leisure travelers has been relying on
                  Groundlink for dependable safe, and professional chauffeured
                  car end service in major cities across World.
                </p>
              </div>
              <div className="opening-hours">
                <div className="row">
                  <div className="col-lg-3 box-content">
                    <div className="box-icon">
                      <i className="fa-regular fa-clock"></i>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="opening-content">
                      <h2>OPENING HOURES</h2>
                      <ul>
                        <li>Mon - Sat(8.00 - 6.00)</li>
                        <li>Sunday - Closed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Site Map */}
            <div className="col-lg-8">
              <div className="row">
                {/* Course */}
                <div className="col-lg-4">
                  <div className="list-item-design">
                    <h2>Course</h2>
                    <ul>
                      <li>
                        <Link>Ui Ux Design</Link>
                      </li>
                      <li>
                        <Link>Web Development</Link>
                      </li>
                      <li>
                        <Link>Business Strategy</Link>
                      </li>
                      <li>
                        <Link>Softwere Development</Link>
                      </li>
                      <li>
                        <Link>Business English</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Useful Link */}
                <div className="col-lg-4">
                  <div className="list-item-design">
                    <h2>Useful Links</h2>
                    <ul>
                      <li>
                        <Link>About Us</Link>
                      </li>
                      <li>
                        <Link>Teachers</Link>
                      </li>
                      <li>
                        <Link>Partner</Link>
                      </li>
                      <li>
                        <Link>Room-Details</Link>
                      </li>
                      <li>
                        <Link>Gallery</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Contact Info */}
                <div className="col-lg-4">
                  <div className="list-item-contact">
                    <h2>Contact</h2>
                    <ul>
                      <li>
                        <Link>
                          <i className="fa-solid fa-house"></i>
                          <span>38052 Regan Knolls, TX</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"mailto:info@companyname.com"}>
                          <i className="fa-solid fa-envelope"></i>
                          <span>info@companyname.com</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"tel:+44-01743291431"}>
                          <i className="fa-solid fa-phone"></i>
                          <span>+44-01743291430</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"tel:+44-01743291431"}>
                          <i className="fa-solid fa-phone"></i>
                          <span>+44-01743291431</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Footer */}
          <div className="row py-5">
            {/* Logo */}
            <div className="col-lg-3">
              <div className="footer-logo">
                <img src={footerLogo} alt="" />
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="reserved align-items-center">
                <p>Copyright © 2024 by edurock. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-social">
                <ul>
                  <li>
                    <Link>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
