import React from "react";
import "./login.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <h2>Log In</h2>

        <form>
          <label>Login ID</label>
          <input
            name="Login ID"
            type="email"
            placeholder="Enter Login ID"
            required
            className="form-input"
          />
          <label>Password</label>
          <input
            name="Password"
            type="password"
            placeholder="Enter Password"
            required
            className="form-input"
          />
          <div className="inputs">
            <div
              className="text-fields"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>
                <input type="checkbox" /> Remember me{" "}
              </span>
              <p>Change Password</p>
            </div>
            <div className="text-fields">
              <input type="checkbox" /> Agree to <p> Terms & Conditions</p>
            </div>
          </div>
          <div className="buttons">
            <button type="submit" className="loginButton">
              {" "}
              Log In{" "}
            </button>
          </div>
          <div className="text">
            <p>
              Don't have an account?{" "}
              <span style={{ color: "#F78719" }}>Register Here</span>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
