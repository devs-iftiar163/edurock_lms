const Instructors = () => {
  return (
    <>
      <section className="instructor-section">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-lg-6">
              <div className="ins-heading">
                <h2>Learn from the best instructors</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
            <div className="col-lg-6 justify-content-end">
              <div className="ins-button">
                <button className="ins-button-des">View All Instructors</button>
              </div>
            </div>
          </div>
          {/* Instructors Card */}
          <div className="row">
            {/* Instructor One */}
            <div className="col-lg-3">
              <div className="instructor-card">
                <div className="instructor-image-box">
                  <div className="ins-image">
                    <img src="" alt="" />
                  </div>
                  <div className="ins-social"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructors;
