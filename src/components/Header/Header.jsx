import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../public/logo_1.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            {/* Desktop Menu */}
            <div className="desktop-menu">
              <div className="col-lg-12">
                <div className="row">
                  {/* Logo Area */}
                  <div className="col-lg-3 justify-content-center">
                    <div className="logo">
                      <Link to={"#"}>
                        <img src={logo} alt="Logo" />
                      </Link>
                    </div>
                  </div>
                  {/* Menu Area */}
                  <div className="col-lg-6">
                    <div className="main-menu">
                      <ul>
                        <li>
                          <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/about-us"}>About Us</Link>
                        </li>
                        <li>
                          <Link to={"/courses"}>Courses</Link>
                        </li>
                        <li>
                          <Link to={"/contact-us"}>Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Cart And Button Area */}
                  <div className="col-lg-3">
                    <div className="cart-button">
                      <ul>
                        <li className="shopping-cart">
                          <Link to={"#"} className="cart-item">
                            <span className="bubble">0</span>
                            <i className="fa-solid fa-cart-shopping"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"} className="user-login">
                            <i className="fa-solid fa-user"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"} className="button">
                            Get Started
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                      Navbar
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            Home
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
