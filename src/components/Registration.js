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
                    <div class="title">
                        Registration Form
                    </div>
                    <div class="form">
                        <div class="inputfield">
                            <label>First Name</label>
                            <input type="text" name="firstname" class="input"/>
                        </div>
                        <div class="inputfield">
                            <label>Last Name</label>
                            <input type="text" name="lastname" class="input"/>
                        </div>
                        <div class="inputfield">
                            <label>Password</label>
                            <input type="password" name="password" class="input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                        </div>
                        <div class="inputfield">
                            <label>Password</label>
                            <input type="password" name="cpassword" class="input"/>
                        </div>
                        <div class="inputfield">
                            <label>Gender</label>
                            <div class="custom_select">
                                <select type="text" name="Gender" class="Gender">
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            </div>
                        </div>
                        <div class="inputfield">
                            <label>Email Address</label>
                            <input type="email" name="username" class="input"/>
                        </div>
                        <div class="inputfield">
                            <label>Phone Number</label>
                            <input type="number" name="Phone" class="input"/>
                        </div>
                        <div class="inputfield">
                            <label>Photo</label>
                            <input type="file" name="img" class="input"/>
                        </div>
                        <div class="inputfield terms">
                            <label class="check">
                            <input type="checkbox" name="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                            <p>Agreed to terms and conditions</p>
                        </div>
                        <div class="inputfield">
                            <input type="submit" value="Register" name="Register" href="#" class="btn"/>
                        </div>
                    </div>
                </form>
            
            </div>
            </div>
     );
}
 
export default Registration;