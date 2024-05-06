import svgIcon from "../../../public/icon.svg";
import bulb from "../../../public/bulb.svg";
import book from "../../../public/book.svg";

const Service = () => {
  return (
    <>
      <section className="service-section">
        <div className="container">
          <div className="row">
            {/* Service Content Left */}
            <div className="col-lg-6">
              <div className="service-content-left">
                <h4>Populer Subject</h4>
                <h2>Provide It & Technol Subject For You</h2>
                <p className="para-one">
                  Construction is a general term meaning the art and science to
                  form systems organizations, and comes from Latin Construction
                  is
                </p>
                <p className="para-tow">
                  Construction is a general term meaning the art and science to
                  form systems organizations, and comes from Latin Construction
                  is a organizations, and comes from Latin construction and Old
                </p>
                <button className="service-button">Explore More</button>
              </div>
            </div>
            {/* Service Content Right */}
            <div className="col-lg-6">
              <div className="row">
                {/* Left Box */}
                <div className="col-lg-6">
                  <div className="box-one">
                    <img src={svgIcon} alt="" />
                    <h2>Business Studies</h2>
                    <p>
                      Construction is a general term the art and science to form
                    </p>
                    <button className="service-button-one">View Subject</button>
                  </div>
                  <div className="box-one">
                    <img src={bulb} alt="" />
                    <h2>Machine Learning</h2>
                    <p>
                      Construction is a general term the art and science to form
                    </p>
                    <button className="service-button-one">View Subject</button>
                  </div>
                </div>
                {/* Right Box */}
                <div className="col-lg-6 my-4">
                  <div className="box-one">
                    <img src={book} alt="" />
                    <h2>Artist & Design</h2>
                    <p>
                      Construction is a general term the art and science to form
                    </p>
                    <button className="service-button-one">View Subject</button>
                  </div>
                  <div className="box-one">
                    <img src={svgIcon} alt="" />
                    <h2>Business Studies</h2>
                    <p>
                      Construction is a general term the art and science to form
                    </p>
                    <button className="service-button-one">View Subject</button>
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

export default Service;
