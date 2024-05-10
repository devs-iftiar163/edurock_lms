import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            {/* Contact Section Content */}
            <div className="col-lg-6">
              <div className="contact-content">
                <h4>Course List</h4>
                <h2>
                  Register Your Account Get free access to 60000 online course
                </h2>
              </div>
              <div className="play-content">
                <div className="play">
                  <Link>
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
                <div className="play-text">
                  <h4>
                    Learn Something new & Build Your Career From Anywhere In The
                    World
                  </h4>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="contact-form">
                <div className="contact-head">
                  <h4>Fill Your Registration</h4>
                </div>
                <form action="">
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </div>
                  <div className="mail-phone">
                    <div className="mb-3 w-100">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3 w-100 custom-margin">
                      <input
                        type="text"
                        placeholder="Your Phone"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      name=""
                      id=""
                      rows={6}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button className="submit-button" type="submit">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
