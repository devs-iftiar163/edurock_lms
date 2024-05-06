import achieve from "../../../public/counter__1.png";
import student from "../../../public/counter__2.png";
import instractor from "../../../public/counter__3.png";
import world from "../../../public/counter__4.png";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <section className="counter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="achievement">
                <img src={achieve} alt="image" />
                <div className="a-content">
                  <h2>
                    <CountUp start={0} end={16} duration={2} delay={0} />+
                  </h2>
                  <h4>Total Acheivment</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="achievement">
                <img src={student} alt="image" />
                <div className="a-content">
                  <h2>
                    <CountUp start={0} end={122} duration={2} delay={0} />+
                  </h2>
                  <h4>TOTAL STUDENTS</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="achievement">
                <img src={instractor} alt="image" />
                <div className="a-content">
                  <h2>
                    <CountUp start={0} end={20} duration={2} delay={0} />+
                  </h2>
                  <h4>TOTAL INSTRUCTOR</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="achievement">
                <img src={world} alt="image" />
                <div className="a-content">
                  <h2>
                    <CountUp start={0} end={9} duration={2} delay={0} />+
                  </h2>
                  <h4>OVER THE WORLD</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
