import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import UserProfile from './components/User';
import MessagesUser from './components/Messages';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom';
import Projects from './components/Projects';
import React from 'react';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRouter';
function App() {

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
