import axios from "axios";
import React,{SyntheticEvent, useState} from "react";
import ReactDOM from 'react-dom';
import { Link, Redirect } from "react-router-dom";
import { setUserSession } from "../utils/common";
import serverUrl from "./domain";
import './Login.css';
import ParticlesBackground from "./ParticalesBackground";
// import Registration from "./Registration";
// import LoginScript from "./LoginScript";

const Login = (props) => {
    // {user, setUser}--->aly kanyt gwa al login brackets
                const[error,setError]=useState(null);
                // const[loading,setLoading]=useState=(false);
                const[email,setEmail]=useState(null);
                const[password,SetPassowrd]=useState(null);
               

                const loginbtn = async (e:SyntheticEvent)=>{
                    e.preventDefault();   
                    setError(null);
                    // setLoading(true);
                    console.log('working');
                    console.log("Email is : "+ email + " and password : "  + password);

                     await axios.post(`${serverUrl}/auth/signin`,
                    {
                          email,
                          password 
                    })
                    .then(a => {
                        // setUser({ token : a.data.token });
                        // setError(false);
                        // setLoading(false);
                        setUserSession(a.data.token , a.data.user);
                        props.history.push('/dashboard');
                        // console.log('response >>>', response)  
                        // Redirect('./DashBoard')
                    })
                      .catch( e => {
                        //   setLoading(false);
                          console.log("I am in Error");
                        //   console.error( "Error =====> " + JSON.stringify(e.response.data));
                          if(e.response.status === 401 || e.response.status === 400)
                          {
                            // e.response.data.message
                            setError("Email / Password is incorrect");
                          }
                          else
                          {
                            setError("Somthing Went Wrong.  Please try again later.");
                          }
                        //   setError(true);
  
                      });
                      
                    //   console.log( "the user  is =======> " + JSON.stringify(user));
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
                    <form className="form" >
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
                        {error &&<p className="error">{error}</p>}
                        
                        {/* <!--submit--> */}
                        
                        <div className="inputfield">
                            <button type="button"  value="login" className="btn" onClick={loginbtn} >
                                    Login
                            </button>        
                        </div>
                    </form>
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