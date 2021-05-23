import React from 'react';
import './ContactUs.css';
import NavBar from './NavBar';


const ContactUs = () => {
    return (  
        <section className="home_content">
              <div className="sidebar">
        
        {/* this is the nav bar (working) */}
     {/* content of the page */}
     <NavBar/>
     </div>
        <div className="nav_top">
            <div className="continer1">
                <div className="nav_top_left">
                    <ul>
                        <li><a className="ico1">Dashboard <span className="name_team">\</span></a></li>
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

        <div className="container3 contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* <textarea name="txtMsg" className="form-control1" placeholder="Your Message *" style="width: 100%; height: 150px;"></textarea> */}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>

    );
}
 
export default ContactUs;