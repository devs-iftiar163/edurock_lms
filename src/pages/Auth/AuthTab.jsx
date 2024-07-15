import { Link, Outlet } from "react-router-dom";

const AuthTab = () => {
  return (
    <>
      <section className="auth-tab-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="logReg-tab">
                <div className="login-tab">
                  <Link to={"login"}>
                    <h2>Login</h2>
                  </Link>
                </div>
                <div className="register-tab">
                  <Link to={"register"}>
                    <h2>Register</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthTab;
