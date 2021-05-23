import react from 'react';
import NavBar from './NavBar';
import './Messages.css';

const MessagesUser = () => {
    
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
                        <li><a class="ico1">Messages</a></li>
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
        <div class="container3">
            <div class="messaging">
                <div class="inbox_msg">
                    <div class="inbox_people">
                        <div class="headind_srch">
                            <div class="recent_heading">
                                <h4>team</h4>
                            </div>
                            <div class="srch_bar">
                                <div class="stylish-input-group">
                                    <input type="text" class="search-bar" placeholder="Search"/>
                                    <span class="input-group-addon">
                    <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                    </span> </div>
                            </div>
                        </div>
                        <div class="inbox_chat">
                            <div class="chat_list active_chat">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div class="chat_ib">
                                        <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div class="chat_ib">
                                        <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div class="chat_ib">
                                        <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div class="chat_ib">
                                        <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div class="chat_ib">
                                        <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div class="chat_ib">
                                        <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                    <div class="chat_ib">
                                        <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mesgs">
                        <div class="msg_history">
                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>Test which is a new approach to have all solutions
                                        </p>
                                        <span class="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                            </div>
                            <div class="outgoing_msg">
                                <div class="sent_msg">
                                    <p>Test which is a new approach to have all solutions
                                    </p>
                                    <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                            </div>
                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>Test, which is a new approach to have</p>
                                        <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
                                </div>
                            </div>
                            <div class="outgoing_msg">
                                <div class="sent_msg">
                                    <p>Apollo University, Delhi, India Test</p>
                                    <span class="time_date"> 11:01 AM    |    Today</span> </div>
                            </div>
                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span class="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span class="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span class="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span class="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                        <span class="time_date"> 11:01 AM    |    Today</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="type_msg">
                            <div class="input_msg_write">
                                <input type="text" class="write_msg" placeholder="Type a message" />
                                <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
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