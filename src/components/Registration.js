import React,{SyntheticEvent, useState} from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './Registration.css';
import serverUrl from "./domain";
import ParticlesBackground from "./ParticalesBackground";
import axios from "axios";

const Registration = () => {
              const[username,setUserName]=useState(null);
              const[firstname,setFirstname]=useState(null);
              const[lastname,setLastname]=useState(null);
              const[password,setPassword]=useState(null);
              const[confirmPassword,setCpassword]=useState(null); 
              const[email,setEmail]=useState(null);
              const[phonenumber,setPhoneNumber]=useState(null);   
              const[jobTitle,setJobTitle]=useState(null);
              const[birthDate,setBirthDate]=useState(Date.now());
             
             
              const submit = async (e:SyntheticEvent)=>{
                  e.preventDefault();   
                  console.log('working');

                  const response = await axios.post(`${serverUrl}/auth/signup`,
                  {
                        name : firstname + lastname,
                        username,
                        password,
                        confirmPassword,
                        email,
                        phonenumber,
                        jobTitle,
                        birthDate : birthDate.toString()
                  }).then(a => console.log(JSON.stringify(a)))
                    .catch( e => {
                        console.log("I am in Error");
                        console.log( "Error =====> " + JSON.stringify(e.response.data));

                    }); 

                //   console.log(response);
                  }
              
           

                  const checkIfUserNameExists = (value) =>{
                      setUserName(value);
                      axios.get(`${serverUrl}/users/username/${value}/exists`)
                                .then( a => {
                                    if(a.data === true)
                                    {  
                                       console.log(`${username} is exist`) ;
                                    //    usernamever=true;
                                    }

                                    else
                                    { 
                                        console.log(`${username} not exist`);
                                        // usernamever=false;
                                    } 
                                })}
                              
                                const checkIfEmail = (value) =>{
                                    setEmail(value);
                                    axios.get(`${serverUrl}/users/email/${value}/exists`)
                                              .then( a => {
                                                  if(a.data === true)
                                                  {  
                                                     console.log(`${email} is exist`); 
                                                    //  emailaddressver=true;
                                                  }
              
                                                  else
                                                  { 
                                                      console.log(`${email} not exist`)
                                                    //   emailaddressver=false;
                                                  } 
                                              })}
                                        //       const valid=(a)={
                                        //         if (emailaddressver === false && usernamever === false) {
                                        //             a=true
                                        //             }
                                        //             else
                                        //             {
                                        //                 a=false;
                                        //             }
          
                                        //   }
    return ( 
        // <!-- particles.js container -->
        <div id="particles-js">
      <ParticlesBackground></ParticlesBackground>
        <div class="page">
            
                <form method="post" action="" class="wrapper" onSubmit={submit}>
                    <div className="title">
                        Registration Form
                    </div>
                    <div className="form">
                    <div className="inputfield">
                        {/* <span className="alreadyexict">This User Name Already Exicte </span> */}
                            <label>UserName</label>
                            <input type="text" name="firstname" className="input" placeholder="FirstName" onChange={e=> checkIfUserNameExists(e.target.value)} required/>
                        </div>
                        <div className="inputfield">
                            <label>First Name</label>
                            <input type="text" name="firstname" className="input" placeholder="FirstName" onChange={e=>setFirstname(e.target.value)} required/>
                        </div>
                        <div className="inputfield">
                            <label>Last Name</label>
                            <input type="text" name="lastname" className="input" placeholder="LastName" onChange={e=>setLastname(e.target.value)} required/>
                        </div>
                        <div className="inputfield">
                            <label>Password</label>
                            <input type="password" name="password" className="input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  placeholder="Password" onChange={e=>setPassword(e.target.value)} required/>
                        </div>
                        <div className="inputfield">
                            <label>Confirm Password</label>
                            <input type="password" name="cpassword" className="input" placeholder="ConfirmPassword" onChange={e=>setCpassword(e.target.value)} required/>
                        </div>
                        <div className="inputfield">
                            <label>JobTitle</label>
                            <div className="custom_select">
                             <select type="text" name="Gender" className="Gender"  onClick={e=>setJobTitle(e.target.value)} required>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            </div>
                        </div>
                        <div className="inputfield">
                            <label>Email Address</label>
                            <input type="email" name="email" className="input" placeholder="EmailAddress" onChange={e=> checkIfEmail(e.target.value)} required/>
                        </div>
                        <div className="inputfield">
                            <label>Phone Number</label>
                            <input type="number" name="Phone" className="input" placeholder="Phone Number"onChange={e=> setPhoneNumber(e.target.value)} required/>
                        </div>
                        <div className="inputfield">
                             <p>
                            <p>Date</p>
                            <input type="Date" onChange = {(e) => setBirthDate(e.target.value)} required />
                        </p>
                        </div>
                        <div className="inputfield terms">
                            <label className="check">
                            <input type="checkbox" name="checkbox" required/>
                            <span className="checkmark"></span>
                        </label>
                            <p>Agreed to terms and conditions</p>
                        </div>
                        <div className="inputfield">
                            <button type="submit" value="Register" name="Register" href="/" className="btn" >
                                    Sign Up
                                    </button>
                        </div>
                    </div>
                </form>
            
            </div>
            </div>
     );
}
 
export default Registration;