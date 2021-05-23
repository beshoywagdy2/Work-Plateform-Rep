import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import UserProfile from './components/User';
import MessagesUser from './components/Messages';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      
         {/* <div className="home_content"> */}
           <Switch>
            
             <Route exact path="/">
                <Login/>
             </Route>
             <Route path="/Registration">
                 <Registration/>
             </Route>
             <Route path="/DashBoard">
                  <Dashboard/>
             </Route>
             <Route path="/User">
                  <UserProfile/>
             </Route>
             <Route path="/Messages">
                   <MessagesUser/>
             </Route>
             <Route path="/ContactUs">
                   <ContactUs/>
             </Route>
           </Switch>
         </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
