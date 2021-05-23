import react from 'react';
import NavBar from './NavBar';
import './Messages.css';

const MessagesUser = () => {
    
    return (
        <section className="home_content">
            <div className="sidebar">
        <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
        {/* this is the nav bar (working) */}
     {/* content of the page */}
     <NavBar/>
     </div>
        <div className="nav_top">
            <div className="continer1">
                <div className="nav_top_left">
                    <ul>
                        <li><a className="ico1">Messages</a></li>
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
        <div className="container3">
            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                        <div className="headind_srch">
                            <div className="recent_heading">
                                <h4>team</h4>
                            </div>
                            <div className="srch_bar">
                                <div className="stylish-input-group">
                                    <input type="text" className="search-bar" placeholder="Search"/>
                                    <span className="input-group-addon">
                    <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                    </span> </div>
                            </div>
                        </div>
                        <div className="inbox_chat">
                            <div className="chat_list active_chat">
                                <div className="chat_people">
                                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div className="chat_ib">
                                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat_list">
                                <div className="chat_people">
                                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div className="chat_ib">
                                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat_list">
                                <div className="chat_people">
                                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div className="chat_ib">
                                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat_list">
                                <div className="chat_people">
                                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div className="chat_ib">
                                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat_list">
                                <div className="chat_people">
                                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div className="chat_ib">
                                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat_list">
                                <div className="chat_people">
                                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div className="chat_ib">
                                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat_list">
                                <div className="chat_people">
                                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div className="chat_ib">
                                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mesgs">
                        <div className="msg_history">
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>Test which is a new approach to have all solutions
                                        </p>
                                        <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                            </div>
                            <div className="outgoing_msg">
                                <div className="sent_msg">
                                    <p>Test which is a new approach to have all solutions
                                    </p>
                                    <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>Test, which is a new approach to have</p>
                                        <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                                </div>
                            </div>
                            <div className="outgoing_msg">
                                <div className="sent_msg">
                                    <p>Apollo University, Delhi, India Test</p>
                                    <span className="time_date"> 11:01 AM    |    Today</span> </div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div className="incoming_msg">
                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div className="received_msg">
                                    <div className="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="type_msg">
                            <div className="input_msg_write">
                                <input type="text" className="write_msg" placeholder="Type a message" />
                                <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </section>

    );

}
 
export default MessagesUser;