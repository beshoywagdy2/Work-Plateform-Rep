import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      
         {/* <div className="home_content"> */}
           <Switch>
            
             <Route exact path="/">
             {/* <NavBar/> */}
                <Login/>
                
             </Route>
             <Route path="/Registration">
                 <Registration/>
             </Route>
             <Route path="/DashBoard">
                  {/* <NavBar/> */}
                  <Dashboard/>
             </Route>
             <Route path="">
               
             </Route>
             <Route path="">
               
             </Route>
           </Switch>
         </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
