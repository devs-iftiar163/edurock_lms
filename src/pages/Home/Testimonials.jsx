import Owl from "./Owl";

const Testimonials = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            {/* Testimonial Section Headings */}
            <div className="col-lg-4">
              <div className="testimonial-heading">
                <h4>Course List</h4>
                <h2>What They Say About us</h2>
                <p>
                  Construction is a general term meaning the art and science to
                  form systems organizations and comes from Latin Construction
                  is
                </p>
                <button className="testimonial-button">Explore More</button>
              </div>
            </div>
            {/* Clients Reviews */}
            <div className="col-lg-4">
              <Owl />
            </div>
            <div className="col-lg-4">
              <div className="testimonial-content">
                <div className="testimonials-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <div className="content-box">
                  <p>
                    “The other hand we denounce righteou indg ation men who are
                    so beguiled and demoraliz by the the mo ment.Dislike men who
                    so development co”
                  </p>
                </div>
                <div className="author-box">
                  <img src="" alt="" />
                  <div className="designation">
                    <h4>Robind Jon</h4>
                    <p>Desginer TechBoot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
