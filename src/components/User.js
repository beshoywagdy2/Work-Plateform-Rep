import React from 'react';
import './User.css';
import NavBar from './NavBar';


const UserProfile = () => {
    return ( 
        <section className="home_content">
            <div className="sidebar">
                <NavBar/>
            </div>
        <div className="nav_top">
            <div className="continer1">
                <div className="nav_top_left">
                    <ul>
                        <li><a className="ico1">profile </a></li>
                    </ul>

                    <div id="myModal">
                        <input type="text"/>
                        <div className="a_ico2">
                            <a className="ico2"><i className="fas fa-search"></i></a>
                            <a className="ico2" id="span"><i className="fas fa-times"></i></a>
                        </div>
                    </div>
                </div>
                <div className="nav_top_right">
                    <ul>
                        {/* <!--<li><a role="button" className="ico1" id="myBtn"><i className="fas fa-search"></i></a></li--> */}
                        <li><a role="button" className="ico1"><i className="far fa-comments"></i></a></li>
                        <li><a role="button" className="ico1"><i className="far fa-bell"></i></a></li>
                        <li><a role="button" className="ico1" data-widget="fullscreen"><i className="fas fa-expand-arrows-alt"></i></a></li>
                        <li>
                            <a role="button" className="ico1"><img src="http://placehold.it/40/" href="test3.html" className="img_user" alt="User Image"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="contaner2">
            <div className="Profile">
                <div className="all_data">
                    <div className="speed_data">
                        <img src="http://placehold.it/250/" className="img_user" alt="img user"/>
                        <div className="text">
                            <a className="name_user1">paula wadgy</a>
                            <a className="email_user">paulwagdy@gmail.com</a>
                        </div>
                    </div>
                    <div className="data_info">
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