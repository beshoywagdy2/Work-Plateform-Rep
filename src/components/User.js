import React from 'react';
import './User.css';
import NavBar from './NavBar';


const UserProfile = () => {
    return ( 
        <section class="home_content">
            <div class="sidebar">
                <NavBar/>
            </div>
        <div class="nav_top">
            <div class="continer1">
                <div class="nav_top_left">
                    <ul>
                        <li><a class="ico1">profile </a></li>
                    </ul>

                    <div id="myModal">
                        <input type="text"/>
                        <div class="a_ico2">
                            <a class="ico2"><i class="fas fa-search"></i></a>
                            <a class="ico2" id="span"><i class="fas fa-times"></i></a>
                        </div>
                    </div>
                </div>
                <div class="nav_top_right">
                    <ul>
                        {/* <!--<li><a role="button" class="ico1" id="myBtn"><i class="fas fa-search"></i></a></li--> */}
                        <li><a role="button" class="ico1"><i class="far fa-comments"></i></a></li>
                        <li><a role="button" class="ico1"><i class="far fa-bell"></i></a></li>
                        <li><a role="button" class="ico1" data-widget="fullscreen"><i class="fas fa-expand-arrows-alt"></i></a></li>
                        <li>
                            <a role="button" class="ico1"><img src="http://placehold.it/40/" href="test3.html" class="img_user" alt="User Image"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="contaner2">
            <div class="Profile">
                <div class="all_data">
                    <div class="speed_data">
                        <img src="http://placehold.it/250/" class="img_user" alt="img user"/>
                        <div class="text">
                            <a class="name_user1">paula wadgy</a>
                            <a class="email_user">paulwagdy@gmail.com</a>
                        </div>
                    </div>
                    <div class="data_info">
                        <p>
                            <a>user name</a>
                            <input type="text"/>
                        </p>
                        <p>
                            <a>Email</a>
                            <input type="email"/>
                        </p>
                        <p>
                            <a>password</a>
                            <input type="password"/>
                        </p>
                        <p>
                            <a>First name</a>
                            <input type="text"/>
                        </p>
                        <p>
                            <a>Last name</a>
                            <input type="text"/>
                        </p>
                        <p>
                            <a>Gender</a>
                            <input type="text"/>
                        </p>
                        <p>
                            <a>Date</a>
                            <input type="Date"/>
                        </p>
                        <p>
                            <a>Phone</a>
                            <input type="number"/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default UserProfile;