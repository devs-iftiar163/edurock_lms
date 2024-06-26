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
                          <Link to={"/course-listings"}>Courses</Link>
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
              <div className="col-md-4 col-sm-4">
                <Link to={"#"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="menu-bar">
                  <div className="cart-menu">
                    <Link to={"#"} className="cart-item">
                      <span className="bubble">0</span>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                  </div>
                  <div className="menu-button">
                    <button
                      className="menu-toggle-button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i class="fa-solid fa-bars fa-fw"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal */}

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-2}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <img src={logo} alt="" />
                          <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="toggle-menu">
                            <ul>
                              <li>
                                <Link to={"/"}>Home</Link>
                              </li>
                              <li>
                                <Link to={"/"}>About Us</Link>
                              </li>
                              <li>
                                <Link to={"/"}>Courses</Link>
                              </li>
                              <li>
                                <Link to={"/"}>Contact Us</Link>
                              </li>
                              <li>
                                <Link to={"/"}>My Account</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
