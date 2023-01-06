import React from "react";
import "./Signin.css";
import { useState } from "react";

const SignIn = () => {
    const [rightPanel,setRightPanel]=useState(false);
  return (
    <div className={rightPanel? "container right-panel-active":"container"} id="container">
      
      <div className="form-container sign-up-container">
        <form >
          <h1>Startup Sign In</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button style={{backgroundColor:'#4e54c8'}}>Sign In</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form >
          <h1>Investor Sign In</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <a href="#">Forgot your password?</a>
          <button type="submit" style={{backgroundColor:'#4e54c8'}}> Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Not a startup?</h1>
            <p>SignIn as an investor here!</p>
            <button className="ghost" id="signIn" onClick={()=>setRightPanel(false)}>
              Sign In as investor
            </button>

            <a href="/">
              <button
                className="ghost"
                style={{ marginTop: "20px" }}
                value="none"
              >
                Back to Home
              </button>
            </a>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Not an investor?</h1>
            <p>Sign In as a startup here!</p>
            <button className="ghost" id="signUp" onClick={()=>setRightPanel(true)}>
              Sign In as Startup
            </button>
            <a href="/">
              <button
                className="ghost"
                style={{ marginTop: "20px" }}
                value="none"
              >
                Back to Home
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
