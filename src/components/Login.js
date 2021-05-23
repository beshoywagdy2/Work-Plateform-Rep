import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './Login.css';
import ParticlesBackground from "./ParticalesBackground";
import Registration from "./Registration";
// import LoginScript from "./LoginScript";

const Login = () => {
    return ( 
     <div>
        <div id="particles-js">
        <ParticlesBackground></ParticlesBackground>
        

        <div class="page">
            {/* <div className="card"> */}
                {/* <!--card--> */}
                <div class="wrapper">
                    {/* <!--title card--> */}
                    <div className="title">
                        log in
                    </div>
                    {/* <!--input card--> */}
                    <div className="form">
                        {/* <!--Email Address--> */}
                        <div className="inputfield">
                            <label>Email Address</label>
                            <input type="text" className="input"/>
                        </div>
                        {/* <!--Password--> */}
                        <div className="inputfield">
                            <label>Password</label>
                            <input name="pass" className="input" type="Password"/>
                        </div>
                        {/* <!--checkbox--> */}
                        <div className="inputfield terms">
                            <label className="check">
                      <input type="checkbox"/>
                      <span className="checkmark"></span>
                    </label>
                            <p>Remmber me</p>
                        </div>
                        {/* <!--submit--> */}
                        <div className="inputfield">
                            <button type="button" href="test1.html" value="login" className="btn">
                                <Link to="/Dashboard">
                                    Login
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="Registration">
                        <Link to="Registration">Sign Up</Link>
                    </div>
                </div>
            {/* </div> */}
        </div>
        
     </div>
    </div>
    );
}
 
export default Login;