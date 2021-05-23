import React from 'react';
import NavBar from './NavBar';
import './Projects.css';



const Projects = () => {
    return ( 
        <section className="home_content">
        <div className="nav_top">
            <div className="continer1">
                <div className="nav_top_left">
                    <ul>
                        <li><a className="ico1">project<span className="name_team">\</span></a></li>
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

        <div className="body_info">
            <div className="contaner2">
                <a onclick="myFunction9()" role="button" className="Add_proj">
                    Make Project
                </a>
                <div className="all_card">
                    <div className="card">
                        <div className="info_pro">
                            <a className="name_pro" href="test7.html">ProjectName</a>
                            <a onclick="myFunction8()" role="button" style="float: right;margin-top: -50px;margin-right: 10px;"><i style="color: white;" className="fas fa-cog"></i></a>
                            <a className="manger_pro">paulawagdy</a>
                            <div className="time">
                                <a className="time_start">10/10/2021</a>
                                <a className="time_end">10/10/2022</a>
                            </div>
                        </div>
                        <div className="dis_pro">
                            <p>type, kind, sort, nature, description, character mean a number of individuals thought of as a group because of a common quality or qualities. type may suggest strong and clearly marked similarity throughout the items included
                                so that each is typical of the group. one of three basic body types kind may suggest natural grouping. a zoo seemingly having animals of every kind sort often suggests some disparagement. the sort of newspaper dealing in
                                sensational stories nature may imply inherent, essential resemblance rather than obvious or superficial likenesses. two problems of a similar nature description plies a group marked by agreement in all details belonging
                                to a type as described or defined. not all acts of that description are actually illegal character implies a group marked by distinctive likenesses peculiar to the type. research on the subject so far has been of an elementary
                                character type, kind, sort, nature, description, character mean a number of individuals thought of as a group because of a common quality or qualities. type may suggest strong and clearly marked similarity throughout the
                                items included so that each is typical of the group. one of three basic body types kind may suggest natural grouping. a zoo seemingly having animals of every kind sort often suggests some disparagement. the sort of newspaper
                                dealing in sensational stories nature may imply inherent, essential resemblance rather than obvious or superficial likenesses. two problems of a similar nature description plies a group marked by agreement in all details
                                belonging to a type as described or defined. not all acts of that description are actually illegal character implies a group marked by distinctive likenesses peculiar to the type. research on the subject so far has been
                                of an elementary character type, kind, sort, nature, description, character mean a number of individuals thought of as a group because of a common quality or qualities. type may suggest strong and clearly marked similarity
                                throughout the items included so that each is typical of the group. one of three basic body types kind may suggest natural grouping. a zoo seemingly having animals of every kind sort often suggests some disparagement. the
                                sort of newspaper dealing in sensational stories nature may imply inherent, essential resemblance rather than obvious or superficial likenesses. two problems of a similar nature description plies a group marked by agreement
                                in all details belonging to a type as described or defined. not all acts of that description are actually illegal character implies a group marked by distinctive likenesses peculiar to the type. research on the subject
                                so far has been of an elementary character type, kind, sort, nature, description, character mean a number of individuals thought of as a group because of a common quality or qualities. type may suggest strong and clearly
                                marked similarity throughout the items included so that each is typical of the group. one of three basic body types kind may suggest natural grouping. a zoo seemingly having animals of every kind sort often suggests some
                                disparagement. the sort of newspaper dealing in sensational stories nature may imply inherent, essential resemblance rather than obvious or superficial likenesses. two problems of a similar nature description plies a group
                                marked by agreement in all details belonging to a type as described or defined. not all acts of that description are actually illegal character implies a group marked by distinctive likenesses peculiar to the type. research
                                on the subject so far has been of an elementary character type, kind, sort, nature, description, character mean a number of individuals thought of as a group because of a common quality or qualities. type may suggest strong
                                and clearly marked similarity throughout the items included so that each is typical of the group. one of three basic body types kind may suggest natural grouping. a zoo seemingly having animals of every kind sort often
                                suggests some disparagement. the sort of newspaper dealing in sensational stories nature may imply inherent, essential resemblance rather than obvious or superficial likenesses. two problems of a similar nature description
                                plies a group marked by agreement in all details belonging to a type as described or defined. not all acts of that description are actually illegal character implies a group marked by distinctive likenesses peculiar to
                                the type. research on the subject so far has been of an elementary character type, kind, sort, nature, description, character mean a number of individuals thought of as a group because of a common quality or qualities.
                                type may suggest strong and clearly marked similarity throughout the items included so that each is typical of the group. one of three basic body types kind may suggest natural grouping. a zoo seemingly having animals of
                                every kind sort often suggests some disparagement. the sort of newspaper dealing in sensational stories nature may imply inherent, essential resemblance rather than obvious or superficial likenesses. two problems of a similar
                                nature description plies a group marked by agreement in all details belonging to a type as described or defined. not all acts of that description are actually illegal character implies a group marked by distinctive likenesses
                                peculiar to the type. research on the subject so far has been of an elementary character </p>
                        </div>
                        <div className="team">
                            <a className="title_team">team in pro</a>
                            <ul>
                                <li>
                                    <img src="http://placehold.it/30/" className="img_team" alt="img team"/>
                                    <a>team3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="edite" id="nav8">
            <div className="data">
                <a onclick="myFunction8()" role="button" style="font-size: 34px;float: right;width: auto;margin-top: 8px;">
                    <i className='bx bx-x'></i>
                </a>
                <ul>
                    <li>
                        <a>name team</a>
                        <input type="text"/>
                        <button>Edit</button>
                    </li>
                    <li>
                        <a>name leader</a>
                        <input type="text"/>
                        <button>Edit</button>
                    </li>
                    <li>
                        <a>to</a>
                        <input type="number"/>
                        <button>Edit</button>
                    </li>
                    <li>
                        <a>from</a>
                        <input type="number"/>
                        <button>Edit</button>
                    </li>
                    <li>
                        <a>des</a>
                        <textarea type="text"></textarea>
                        <button>Edit</button>
                    </li>
                    <li>
                        <a>Member</a>
                        <ul className="name_member">
                            <li>
                                <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> paula
                            </li>
                        </ul>
                        <button>Edit</button>
                    </li>
                </ul>
            </div>
        </div>

        <div className="edite" id="nav9">
            <div className="data">
                <a onclick="myFunction9()" role="button" style="font-size: 34px;float: right;width: auto;margin-top: 8px;">
                    <i className='bx bx-x'></i>
                </a>
                <ul>
                    <li>
                        <a>name team</a>
                        <input type="text"/>
                    </li>
                    <li>
                        <a>name leader</a>
                        <input type="text"/>
                    </li>
                    <li>
                        <a>to</a>
                        <input type="number"/>
                    </li>
                    <li>
                        <a>from</a>
                        <input type="number"/>
                    </li>
                    <li>
                        <a>des</a>
                        <textarea type="text"></textarea>
                    </li>
                    <li>
                        <a>Member</a>
                        <ul className="name_member">
                            <li>
                                <img src="http://placehold.it/60/" className="img_user" style="float: left; margin: auto;"/> paula
                            </li>
                        </ul>
                    </li>
                </ul>
                <button className="boot">Add </button>
            </div>
        </div>
    </section>
     );
}
 
export default Projects;