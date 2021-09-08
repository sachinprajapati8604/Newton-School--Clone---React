import React from 'react'
import './Header.css'
import { FaUsers, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavTabs from '../NavTabs/NavTabs';
import NavTab from '../NavTabs/NavTab';
import { Route, Switch, Redirect } from "react-router-dom";
export default function Header() {
    return (
        <>
            <div className="container-fluid max-box">

                <div className="row">
                    <div className="col-10  mx-auto">
                        <nav className="navbar navbar-expand-lg  ">
                            <div className="container-fluid ">
                                <a className="navbar-brand text-black" href="#">
                                    <img src="https://i1.wp.com/hrnxt.com/wp-content/uploads/2021/02/Newton-School-1.png?fit=1200%2C771&ssl=1" alt="" width="70" height="40" />
                                    &nbsp;&nbsp; <span className="one-head"> Newton </span> School</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav myul mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#"><FaUsers /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><FaBell /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><FaUserCircle /></a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>

            <div className="container my-3">
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-primary btn-sm">Feedback</button>
                    </div>
                    <div className="col-6 ">
                        <h5 className="heading text-end">Full-Stack Web Development - March 2021 - Edge</h5>
                        <span className="bg-info mypara text-end"> Income sharing agreement signed</span>
                    </div>
                </div>

                <div className="box-tab">
                    <ul>
                        <li><Link className="mylink" to="/course"> Course</Link> </li>
                        <li><Link className="mylink" to="/my-timeline"> My Timeline </Link> </li>
                        <li><Link className="mylink" to="/leaderboard"> Leaderboard </Link> </li>
                        <li><Link className="mylink" to="/milestone"> Milestone </Link> </li>
                        <li><Link className="mylink" to="/arena"> Arena </Link> </li>
                        <li><Link className="mylink" to="/mockinterview"> Mock Interview </Link> </li>
                        <li><Link className="mylink" to="/doubt"> Doubts </Link> </li>
                        <li><Link className="mylink" to="/interview"> Interview </Link> </li>
                        <li><Link className="mylink" to="/placement"> Placement </Link> </li>

                    </ul>

                    {/* <Switch>
                        <Redirect exact from="/" to="/course" />
                        <Route exact path="/:page?" render={props => <NavTab {...props} />} />
                    </Switch> */}
                  
                </div>
            </div>
        </>
    )
}
