import heroBg from "../../../public/about_8.png";
import heroImage from "../../../public/about_14.png";
import badge from "../../../public/about_15.png";

const AboutHeroSection = () => {
  return (
    <>
      <section className="about-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-image">
                <img src={heroImage} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-banner-content custom-mt">
                <h4>About us</h4>
                <h2>Welcome to the online Learning Center</h2>
                <p>
                  Meet my startup design agency Shape Rex Currently I am working
                  at CodeNext as Product Designer.
                </p>
                <div className="badge-box">
                  <div className="badge-icon">
                    <img src={badge} alt="" />
                  </div>
                  <div className="badge-content">
                    <p>
                      <span>10+ Years ExperienceIn</span> this game, Means
                      Product Designing
                    </p>
                  </div>
                </div>
                <p>
                  I love to work in User Experience & User Interface designing.
                  Because I love to solve the design problem and find easy and
                  better solutions to solve it. I always try my best to make
                  good user interface with the best user experience. I have been
                  working as a UX Designer
                </p>
                <button className="about-hero-button">More About</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;
