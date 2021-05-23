 import React,{Component} from 'react';
 import './NavBar.css';
 import { Link } from "react-router-dom";
 
 
 
 
 
 const NavBar = () => {
   
    const handleclick=()=>{
        let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");
            sidebar.classList.toggle("active");
            if (btn.classList.contains("bx-menu")) {
                btn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else {
                btn.classList.replace("bx-menu-alt-right", "bx-menu");
            }
        
    };
    // class="sidebar"
     return (
             <div >
             <div className="logo_content">
                 <div className="logo">
                     <i className='bx bx-won'></i>
                     <div className="logo_name">workera</div>
                 </div>
                 <i className='bx bx-menu' id="btn" onClick={handleclick}></i>
             </div>
             <ul className="nav_list">
                 <li>
                     <Link to="/Dashboard">
                         <i className='bx bx-grid-alt'></i>
                         <span className="links_name">Dashboard</span>
                         </Link>
                     <span className="tooltip">Dashboard</span>
                 </li>
                 <li>
                 <Link to="/user">
                         <i className='bx bx-user'></i>
                         <span className="links_name">User</span>
                     </Link>
                     <span className="tooltip">User</span>
                 </li>
                 <li>
                 <Link to="/Messages">
                         <i className='bx bx-chat'></i>
                         <span className="links_name">Messages</span>
                     </Link>
                     <span className="tooltip">Messages</span>
                 </li>
                 <li>
                 <Link to="/Projects">
                         <i className='bx bx-sitemap'></i>
                         <span className="links_name">project </span>
                     </Link>
                     <span className="tooltip">project </span>
                 </li>
                 <li>
                 <Link to="/ContactUs">
                         <i className='bx bxs-contact'></i>
                         <span className="links_name">contact us</span>
                     </Link>
                     <span className="tooltip">contact us </span>
                 </li>
                 <li className="log_out">
                 <Link to="/Login">
                         <i className='bx bx-log-out' id="log_out"></i>
                         <span className="links_name">log_out</span>
                     </Link>
                     <span className="tooltip">log_out</span>
                 </li>
             </ul>
         </div>


       );
 }
  
 export default NavBar;