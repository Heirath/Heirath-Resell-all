import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <div className="login-page">
        <div className="login-main">
        <Link to={'/'}>
                <h1>Heirath <span>.</span></h1> </Link>
          <form action="">
            <label htmlFor="">
              Email address
              <input type="text" placeholder=" Email address" />{" "}
              <div className="line"></div>
            </label>
            <label htmlFor="">
              Phone number
              <input type="number" placeholder="phone number" />{" "}
              <div className="line"></div>
            </label>
            <label htmlFor="">
              Password
              <input type="text" placeholder="password" />{" "}
              <div className="line"></div>
            </label>
            <button> Sign IN</button>
            <p>Already have an account ?</p>
            <Link to={'/login'} ><button> Login</button></Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
