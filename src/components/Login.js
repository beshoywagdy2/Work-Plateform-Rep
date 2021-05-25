import axios from "axios";
import React,{SyntheticEvent, useState} from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import serverUrl from "./domain";
import './Login.css';
import ParticlesBackground from "./ParticalesBackground";
// import Registration from "./Registration";
// import LoginScript from "./LoginScript";

const Login = () => {

                const[email,setEmail]=useState(null);
                const[password,SetPassowrd]=useState(null);
               

                const loginbtn = async (e:SyntheticEvent)=>{
                    e.preventDefault();   
                    console.log('working');
                    console.log(email,password);
                    const response = await axios.post(`${serverUrl}/auth/signin`,
                    {
                          email,
                          password 
                    })
                    .then(a => console.log(JSON.stringify(a)))
                      .catch( e => {
                          console.log("I am in Error");
                          console.log( "Error =====> " + JSON.stringify(e.response.data));
  
                      }); 
                    }


    return ( 
     <div>
        <div id="particles-js">
        <ParticlesBackground></ParticlesBackground>
        

        <div className="page">
            {/* <div className="card"> */}
                {/* <!--card--> */}
                <div className="wrapper">
                    {/* <!--title card--> */}
                    <div className="title">
                        log in
                    </div>
                    {/* <!--input card--> */}
                    <div className="form">
                        {/* <!--Email Address--> */}
                        <div className="inputfield">
                            <label>Email Address</label>
                            <input type="email" className="input" onChange={e=> setEmail(e.target.value)}/>
                        </div>
                        {/* <!--Password--> */}
                        <div className="inputfield">
                            <label>Password</label>
                            <input name="pass" className="input" type="Password" onChange={e=> SetPassowrd(e.target.value)}/>
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
                            <button type="button"  value="login" className="btn" onClick={loginbtn}>
                                    Login
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