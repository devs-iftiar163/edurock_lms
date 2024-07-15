import { Link } from "react-router-dom";

const AuthPageHeader = () => {
  return (
    <>
      <section className="about-pagination">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div className="about-hero-content">
                <h2>Login/Register</h2>
                <div className="pagination">
                  <ul>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <i class="fa-solid fa-angle-right"></i>
                    </li>
                    <li>
                      <p>Login/Register</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPageHeader;
