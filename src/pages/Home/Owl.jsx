import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import reviewImage from "../../../public/about_5.png";

const Owl = () => {
  const options = {
    items: 2,
    nav: true,
    rewind: true,
    autoplay: true,
    slideBy: 1,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <OwlCarousel className="owl-theme" options={options}>
        <div class="item">
          <div className="testimonial-content">
            <div className="testimonials-icon">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <div className="content-box">
              <p>
                “The other hand we denounce righteou indg ation men who are so
                beguiled and demoraliz by the the mo ment.Dislike men who so
                development co”
              </p>
            </div>
            <div className="author-box">
              <img src={reviewImage} alt="Client" />
              <div className="designation">
                <h4>Robind Jon</h4>
                <p>Desginer TechBoot</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div className="testimonial-content">
            <div className="testimonials-icon">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <div className="content-box">
              <p>
                “The other hand we denounce righteou indg ation men who are so
                beguiled and demoraliz by the the mo ment.Dislike men who so
                development co”
              </p>
            </div>
            <div className="author-box">
              <img src={reviewImage} alt="Client" />
              <div className="designation">
                <h4>Robind Jon</h4>
                <p>Desginer TechBoot</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div className="testimonial-content">
            <div className="testimonials-icon">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <div className="content-box">
              <p>
                “The other hand we denounce righteou indg ation men who are so
                beguiled and demoraliz by the the mo ment.Dislike men who so
                development co”
              </p>
            </div>
            <div className="author-box">
              <img src={reviewImage} alt="Client" />
              <div className="designation">
                <h4>Robind Jon</h4>
                <p>Desginer TechBoot</p>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
};

export default Owl;
