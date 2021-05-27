import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import UserProfile from './components/User';
import MessagesUser from './components/Messages';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router,Route , Switch, NavLink} from 'react-router-dom';
import Projects from './components/Projects';
import React, { useState } from 'react';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRouter';
import { getToken } from './utils/common';

function App() {

    // const [user,setUser] = useState({token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJiZXNob3l3YWdkeTEyM0BnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImNhMWU2NTg4LWZjNjctNGEwNC1iNDUzLWUxNTk5NWUxNGU4ZiIsImV4cCI6MTYyMjgyMzExMCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzMzYvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzMzYvIn0.6lRkWybAm8UG7bzrAgdLKoe11-pMopVOsqNdhG3c3V8"});
    // console.log("user in app.js  = " + JSON.stringify(user));
    // const[authLoading,setAuthLoading]=useState(true);
    // if(authLoading && getToken()){
    // return console.log(getToken());
    // }


  return (
    

    <Router>
      <div className="App">
      

         {/* <div className="home_content"> */}
           <Switch>
            
             <PublicRoute exact path="/" component={Login}/>
             {/* user={user} setUser = {setUser} */}
                {/* <Login /> */}
             {/* </publicRoute> */}
             <Route path="/Registration" component={Registration}>
                 {/* <Registration/> */}
             </Route>
             <PrivateRoute path="/DashBoard" component={Dashboard}/>
             {/* user={user} */}
                  {/* <Dashboard /> */}
             {/* </privateRoute> */}
             <PrivateRoute path="/User" component={UserProfile}/>
                  {/* <UserProfile/> */}
             {/* </Route> */}
             <PrivateRoute path="/Messages" component={MessagesUser}/>
                   {/* <MessagesUser/> */}
             {/* </Route> */}
             <PrivateRoute path="/ContactUs" component={ContactUs}/>
                   {/* <ContactUs/> */}
             {/* </Route> */}
             <PrivateRoute path="/Projects" component={Projects}/>
                   {/* <Projects/> */}
             {/* </Route> */}
           </Switch>
         </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
