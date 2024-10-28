import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-section">
        <h2>Login</h2>
        <p>Enter your email or username and your password</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email / Username</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn login-btn">Login</button>
        </form>
      </div>

      <div className="register-reset-section">
        <div>
          <h3>Don't have an account yet?</h3>
          <button className="btn register-btn">Register to bid</button>
        </div>

        <div>
          <h3>Forgot your password?</h3>
          <p>We can reset it for you.</p>
          <form>
            <input type="email" placeholder="Enter your email address" className="form-control" />
            <button type="submit" className="btn reset-btn">Request password reset</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
