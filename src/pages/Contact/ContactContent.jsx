import bannerImage from "../../../public/support.png";
import addressImage from "../../../public/business.png";
import contactSupport from "../../../public/customer-service.png";
import mediaSupport from "../../../public/social-media.png";

const ContactContent = () => {
  return (
    <>
      <section className="contact-us-section">
        <div className="container">
          <div className="row">
            {/* Contact Content */}
            <div className="col-lg-6">
              <div className="contact-feature-image">
                <img src={bannerImage} alt="" />
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="contact-form-wrapper">
                <div className="contact-header">
                  <h2>Contact Us</h2>
                  <p>Get in touch and let us know how we can help</p>
                </div>
                <div className="contact-fields mt-5">
                  <div className="contact-name-wrapper d-flex justify-content-between">
                    <div className="name-box">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="name-box">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="contact-media-wrapper d-flex justify-content-between mt-3">
                    <div className="mail-box">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="mail-box">
                      <input type="text" placeholder="Phone No" />
                    </div>
                  </div>
                  <div className="course-name mt-3">
                    <select name="" id="">
                      <option value="1">-- Select Course --</option>
                      <option value="2">Mobile Handset</option>
                      <option value="3">Americano Dish</option>
                      <option value="4">Fresh Vegitable</option>
                      <option value="5">Fruits</option>
                      <option value="6">Raxila Dish nonyte</option>
                    </select>
                  </div>
                  <div className="message-field mt-3">
                    <textarea
                      placeholder="Message"
                      name=""
                      id=""
                      rows={6}
                    ></textarea>
                  </div>
                  <div className="contact-submit-button mt-3">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="support-info">
        <div className="container">
          {/* Support Info Heading */}
          <div className="row">
            <div className="col-lg-12">
              <div className="support-heading">
                <h2>Support & Assistance</h2>
                <p>
                  our worldwide annual spend on digital advertising surpassing
                  billion, it’s no surprise that different apches to online
                  marketing are becoming available
                </p>
              </div>
            </div>
          </div>

          {/* Support Info Details */}
          <div className="row mt-5 gap-between-cols">
            <div className="col-lg-4 col-md-4 col-sm-6">
              {/* Support Card */}
              <div className="support-card">
                <div className="support-image">
                  <img src={addressImage} alt="" />
                </div>
                <div className="support-content">
                  <h4>Office Address</h4>
                  <p>
                    our worldwide annual spend on digital advertising surpassing
                    billion, it’s no surprise that different apches to online
                    marketing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="support-card">
                <div className="support-image">
                  <img src={contactSupport} alt="" />
                </div>
                <div className="support-content">
                  <h4>24/7 Support</h4>
                  <p>
                    our worldwide annual spend on digital advertising surpassing
                    billion, it’s no surprise that different apches to online
                    marketing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="support-card">
                <div className="support-image">
                  <img src={mediaSupport} alt="" />
                </div>
                <div className="support-content">
                  <h4>Media & Technology</h4>
                  <p>
                    our worldwide annual spend on digital advertising surpassing
                    billion, it’s no surprise that different apches to online
                    marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
