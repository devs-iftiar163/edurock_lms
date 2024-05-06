import CountUp from "react-countup";
import kidImage from "../../../public/about_2.png";
import subImage from "../../../public/about_3.png";
import vectorImage from "../../../public/about_11.png";
import vectorTwo from "../../../public/about_4.png";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            {/* Left Image Coloumn */}
            <div className="col-lg-6">
              <div className="image-container">
                <img className="moving-vector" src={vectorTwo} alt="Image" />
                <img className="kid-image" src={kidImage} alt="Image" />
                <img className="sub-image" src={subImage} alt="Image" />
                <img className="vector-image" src={vectorImage} alt="Image" />
                <div className="experience-content">
                  <h2>
                    <CountUp start={0} end={25} duration={3} delay={0} />+
                  </h2>
                  <h4>YEARS EXPERIENCE JUST ACHIVED</h4>
                </div>
              </div>
            </div>
            {/* Right Content Coloumn */}
            <div className="col-lg-6">
              <div className="about-content">
                <h4>About Us</h4>
                <h2>Welcome to the Online Learning Center</h2>
                <p>
                  25+Contrary to popular belief, Lorem Ipsum is not simply
                  random text roots in a piece of classical Latin literature
                  from 45 BC
                </p>
              </div>
              <div className="about-list my-3">
                <ul>
                  <li className="elements">
                    <i className="fa-solid fa-check"></i>
                    <p>Lorem Ipsum is simply dummy</p>
                  </li>
                  <li className="elements">
                    <i className="fa-solid fa-check"></i>
                    <p>Lorem Ipsum is simply dummy</p>
                  </li>
                  <li className="elements">
                    <i className="fa-solid fa-check"></i>
                    <p>Lorem Ipsum is simply dummy</p>
                  </li>
                  <li className="elements">
                    <i className="fa-solid fa-check"></i>
                    <p>Lorem Ipsum is simply dummy</p>
                  </li>
                </ul>
              </div>
              <div className="list-content"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
