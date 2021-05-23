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
  
     return (
             <div class="sidebar">
             <div class="logo_content">
                 <div class="logo">
                     <i class='bx bx-won'></i>
                     <div class="logo_name">workera</div>
                 </div>
                 <i class='bx bx-menu' id="btn" onClick={handleclick}></i>
             </div>
             <ul class="nav_list">
                 <li>
                     <Link to="">
                         <i class='bx bx-grid-alt'></i>
                         <span class="links_name">Dashboard</span>
                         </Link>
                     <span class="tooltip">Dashboard</span>
                 </li>
                 <li>
                 <Link to="New folder/test3.html">
                         <i class='bx bx-user'></i>
                         <span class="links_name">User</span>
                     </Link>
                     <span class="tooltip">User</span>
                 </li>
                 <li>
                 <Link to="#">
                         <i class='bx bx-chat'></i>
                         <span class="links_name">Messages</span>
                     </Link>
                     <span class="tooltip">Messages</span>
                 </li>
                 <li>
                 <Link to="#">
                         <i class='bx bx-sitemap'></i>
                         <span class="links_name">project </span>
                     </Link>
                     <span class="tooltip">project </span>
                 </li>
                 <li>
                 <Link to="#">
                         <i class='bx bxs-contact'></i>
                         <span class="links_name">contact us</span>
                     </Link>
                     <span class="tooltip">contact us </span>
                 </li>
                 <li class="log_out">
                 <Link to="#">
                         <i class='bx bx-log-out' id="log_out"></i>
                         <span class="links_name">log_out</span>
                     </Link>
                     <span class="tooltip">log_out</span>
                 </li>
             </ul>
         </div>


       );
 }
  
 export default NavBar;