import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './Registration.css';
import ParticlesBackground from "./ParticalesBackground";

const Registration = () => {
    
    return ( 
        // <!-- particles.js container -->
        <div id="particles-js">
      <ParticlesBackground></ParticlesBackground>
        <div class="page">
            
                <form method="post" action="" class="wrapper">
                    <div className="title">
                        Registration Form
                    </div>
                    <div className="form">
                        <div className="inputfield">
                            <label>First Name</label>
                            <input type="text" name="firstname" className="input"/>
                        </div>
                        <div className="inputfield">
                            <label>Last Name</label>
                            <input type="text" name="lastname" className="input"/>
                        </div>
                        <div className="inputfield">
                            <label>Password</label>
                            <input type="password" name="password" className="input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                        </div>
                        <div className="inputfield">
                            <label>Confirm Password</label>
                            <input type="password" name="cpassword" className="input"/>
                        </div>
                        <div className="inputfield">
                            <label>Gender</label>
                            <div className="custom_select">
                                <select type="text" name="Gender" className="Gender">
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            </div>
                        </div>
                        <div className="inputfield">
                            <label>Email Address</label>
                            <input type="email" name="username" className="input"/>
                        </div>
                        <div className="inputfield">
                            <label>Phone Number</label>
                            <input type="number" name="Phone" className="input"/>
                        </div>
                        <div className="inputfield">
                            <label>Photo</label>
                            <input type="file" name="img" className="input"/>
                        </div>
                        <div className="inputfield terms">
                            <label className="check">
                            <input type="checkbox" name="checkbox" required/>
                            <span className="checkmark"></span>
                        </label>
                            <p>Agreed to terms and conditions</p>
                        </div>
                        <div className="inputfield">
                            <button type="submit" value="Register" name="Register" href="#" className="btn" >
                                <Link to="/">
                                    Sign Up
                                    </Link></button>
                        </div>
                    </div>
                </form>
            
            </div>
            </div>
     );
}
 
export default Registration;