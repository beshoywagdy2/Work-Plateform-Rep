import React from 'react';
import './ContactUs.css';
import NavBar from './NavBar';


const ContactUs = () => {
    return (  
        <section class="home_content">
              <div className="sidebar">
        <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
        {/* this is the nav bar (working) */}
     {/* content of the page */}
     <NavBar/>
     </div>
        <div class="nav_top">
            <div class="continer1">
                <div class="nav_top_left">
                    <ul>
                        <li><a class="ico1">Dashboard <span class="name_team">\</span></a></li>
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

        <div class="container3 contact-form">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            {/* <textarea name="txtMsg" class="form-control1" placeholder="Your Message *" style="width: 100%; height: 150px;"></textarea> */}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>

    );
}
 
export default ContactUs;