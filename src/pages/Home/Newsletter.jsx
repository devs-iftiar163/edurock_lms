const Newsletter = () => {
  return (
    <>
      <section className="newsletter-section">
        <div className="container">
          <div className="row border-bottom">
            {/* Section Heading */}
            <div className="col-lg-6">
              <div className="newsletter-heading">
                <h2>
                  Subscribe to Our <span>Newsletter!</span>
                </h2>
                <p>
                  Don’t wait make a smart & logical quote here. Its pretty easy.
                </p>
              </div>
            </div>
            {/* Newsletter Form */}
            <div className="col-lg-6">
              <div className="form-area">
                <form action="">
                  <div className="form-group-input">
                    <input type="email" placeholder="Your Email" />
                    <button type="submit" className="newsletter-submit">
                      Subscribe
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

export default Newsletter;
