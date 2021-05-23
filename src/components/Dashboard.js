import react from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
//  import './NavBar.css';
import './Dashboard.css';


const Dashboard = () => {
    return (  <div className="sidebar">
        {/* this is the nav bar (working) */}
     <NavBar/>
     {/* content of the page */}
    <section className="home_content"> 
        <div className="nav_top">
            <div className="continer1">
                <div className="nav_top_left">
                    <ul>
                        <li>
                            {/* <a className="ico1">Dashboard <span className="name_team">\</span></a> */}
                            </li>
                    </ul>

                    <div id="myModal">
                        <input type="text"/>
                        <div className="a_ico2">
                            {/* <a className="ico2"><i className="fas fa-search"></i></a> */}
                            {/* <a className="ico2" id="span"><i className="fas fa-times"></i></a> */}
                        </div>
                    </div>
                </div>
                <div className="nav_top_right">
                    <ul>
                        {/* <!--<li><a role="button" className="ico1" id="myBtn"><i className="fas fa-search"></i></a></li--> */}
                        <li>
                            {/* <a role="button" className="ico1"><i className="far fa-comments"></i></a> */}
                            </li>
                        <li>
                            {/* <a role="button" className="ico1"><i className="far fa-bell"></i></a> */}
                        </li>
                        <li>
                            {/* <a role="button" className="ico1" data-widget="fullscreen"><i className="fas fa-expand-arrows-alt"></i></a> */}
                            </li>
                        <li>
                            {/* <a role="button" className="ico1"><img src="http://placehold.it/40/" href="test3.html" className="img_user" alt="User Image"/></a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="body_data">
            <div className="continer2">

                <select className="room_select" id="room_select">
                <option value="Room1">Room1</option>
                <option value="Room2">Room2</option>
                <option value="Room3">Room3</option>
                <option value="Room4">Room4</option>
                </select>
                {/* <a className="add_room" onclick="myFunction7()">Add Room</a> */}
                {/* <a className="add_team" onclick="myFunction6()">Add Team</a> */}

                <div className="body_data_info">
                    <div className="data_show">
                        <div className="card">
                            <div className="card_title">
                                <h4>Team1
                                    {/* <a onclick="myFunction()" role="button" style="float: right;"><i className="fas fa-cog"></i></a> */}
                                    {/* <a onclick="myFunction1()" style="float: right;margin-right: 10px;"><i className='bx bx-add-to-queue' ></i></a> */}
                                </h4>
                            </div>
                            <div className="all_task">
                                <div className="task">
                                    <div className="main_task">
                                        <a href="test4.html">task</a>
                                        <div className="chart">
                                            <div className="bar"></div>
                                            {/* <!-- Change the value below --> */}
                                            <span id="value1">90%</span>
                                        </div>
                                    </div>
                                    <div className="point">
                                        <ul>
                                            <li>point1</li>
                                            <li>point2</li>
                                            <li>point3</li>
                                            <li>point4</li>
                                            <li>point5</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="task">
                                    <div className="debendant_task2">
                                        <a href="test4.html">task</a>
                                        <div className="chart">
                                            <div className="bar"></div>
                                            {/* <!-- Change the value below --> */}
                                            <span id="value1">90%</span>
                                        </div>
                                    </div>
                                    <div className="point">
                                        <ul>
                                            <li>point1</li>
                                            <li>point2</li>
                                            <li>point3</li>
                                            <li>point4</li>
                                            <li>point5</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="task">
                                    <div className="sub_task1">
                                        <a href="test4.html">task</a>
                                        <div className="chart">
                                            <div className="bar"></div>
                                            {/* <!-- Change the value below --> */}
                                            <span id="value1">90%</span>
                                        </div>
                                    </div>
                                    <div className="point">
                                        <ul>
                                            <li>point1</li>
                                            <li>point2</li>
                                            <li>point3</li>
                                            <li>point4</li>
                                            <li>point5</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edite" id="nav4">
                    <div className="data">
                        {/* <a onclick="myFunction()" role="button" style="font-size: 34px;float: right;width: auto;margin-top: 8px;">
                            <i className='bx bx-x'></i>
                        </a> */}
                        <ul>
                            <li>
                                {/* <a>name team</a> */}
                                <input type="text"/>
                                <button>Edit</button>
                            </li>
                            <li>
                                {/* <a>des</a> */}
                                <textarea type="text"></textarea>
                                <button>Edit</button>
                            </li>
                            <li>
                                {/* <a>Member</a> */}
                                <ul className="name_member">
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> paula */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> beshoy */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> wagdy */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> andew */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> yahya */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> paula */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> beshoy */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> wagdy */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> andew */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> yahya */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> paula */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> beshoy */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> wagdy */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> andew */}
                                    </li>
                                    <li>
                                        {/* <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> yahya */}
                                    </li>
                                </ul>
                                <button>Edit</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="edite1" id="nav5">
                    <div className="data1">
                        {/* <a onclick="myFunction1()" role="button" style="font-size: 34px;float: right;width: auto;margin-top: 8px;">
                            <i className='bx bx-x'></i>
                        </a> */}
                        <ul>
                            <li>
                                {/* <a>Task title</a> */}
                                <input type="text"/>
                            </li>
                            <li>
                                {/* <a>from</a> */}
                                <input type="date"/>
                            </li>
                            <li>
                                {/* <a>to</a> */}
                                <input type="date"/>
                            </li>
                            <li>
                                {/* <a>des</a> */}
                                <textarea type="text"></textarea>
                            </li>
                            <li id="div-container">
                                {/* <a>checkpoint <p onclick="myFunction2()" role="button" style="width: auto;display: contents;"><i className='bx bxs-add-to-queue' ></i></p></a> */}
                                <div id="div-container">
                                    <input type="text"/>
                                </div>
                            </li>
                        </ul>
                        <button>add</button>
                    </div>
                </div>

                <div className="add_team1" id="nav1">
                    <div className="data1">
                        {/* <a onclick="myFunction6()" role="button" style="font-size: 34px;float: right;width: auto;margin-top: 8px;">
                            <i className='bx bx-x'></i>
                        </a> */}
                        <ul>
                            <li>
                                {/* <a>Neam Team</a> */}
                                <input type="text"/>
                            </li>
                            <li>
                                {/* <a>des</a> */}
                                <textarea type="text"></textarea>
                            </li>
                            <li className="select1">
                                {/* <a>Type Team</a> */}
                                {/* <div style="margin: auto;display: table;">
                                    <input type="checkbox" style="width: 0;margin: 0;float: left;margin-top: 5px;margin-right: 15px;"/>
                                    <select className="select">
                                        <option value="Room1">Team1</option>
                                        <option value="Room2">Team2</option>
                                        <option value="Room3">Team3</option>
                                        <option value="Room4">Team4</option>
                                    </select>
                                </div> */}
                            </li>
                        </ul>
                        <button>add</button>
                    </div>
                </div>
                <div className="add_team1" id="nav2">
                    <div className="data1">
                        {/* <a onclick="myFunction7()" role="button" style="font-size: 34px;float: right;width: auto;margin-top: 8px;">
                            <i className='bx bx-x'></i>
                        </a> */}
                        <ul>
                            <li>
                                {/* <a>Add Room</a> */}
                                <input type="text"/>
                            </li>
                            <li>
                                {/* <a>des</a> */}
                                <textarea type="text"></textarea>
                            </li>
                        </ul>
                        <button>add</button>
                    </div>
                </div>

            </div>
        </div>
    </section> 
    </div>

    );
}
 
export default Dashboard;