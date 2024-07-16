import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/* Login Form */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 login-form">
            <div className="login-form-field">
              {/* Login Header */}
              <div className="login-header">
                <h2>Login</h2>
                <p>Don't have an account yet? Sign up for free</p>
              </div>
              <div className="login-fields mt-3">
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="">Username or email</label>
                  <input
                    type="text"
                    className="text-fields"
                    placeholder="Your Username of Email"
                  />
                </div>
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="text-fields"
                    placeholder="Password"
                  />
                </div>
                {/* Forget Pass box */}
                <div className="password-reset d-flex justify-content-between align-item-center gap-2">
                  <div className="mb-3 checkbox-field">
                    <input type="checkbox" />
                    <label htmlFor="">Remember me</label>
                  </div>
                  <Link to={"#"}>
                    <p>Forgot your password?</p>
                  </Link>
                </div>
                <div className="submission">
                  <button>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
