import bannerImage from "../../../public/about_1.png";
import movingImage from "../../../public/herobanner__6.png";
import backImage from "../../../public/herobanner__7.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row section-background">
            {/* Content Coloumn */}
            <div className="col-lg-6 test">
              <div className="hero-content">
                <div className="moving">
                  <img src={movingImage} alt="moving Image" />
                </div>
                <h4>EDUCATION SOLUTION</h4>
                <h2>Cloud-based LMS Trusted by 1000+</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry. Lorem Ipsum has been
                </p>
                <button className="hero-button">View Courses</button>
              </div>
            </div>
            {/* Image Coloumn */}
            <div className="col-lg-6 bg-image">
              <div className="banner-image">
                <div className="back-image">
                  <img src={backImage} alt="" />
                </div>
                <img src={bannerImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
