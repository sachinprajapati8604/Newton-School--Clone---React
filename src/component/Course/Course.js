import React from 'react'
import upcomingAssighnment from '../MyObject/UpcomingAssighnment'
import './Course.css'
export default function Course() {

    return (
        <>
            <div className="container-fluid fill-color">
                <div className="container row mx-auto">
                    <div className="row ">
                        <div className=" col-lg-6 col-sm-12 ">
                            <h2> Next Lecture</h2>
                            <p>coming soon...</p>
                            <button className="btn btn-primary" disabled="true">Join Lecture </button>
                        </div>
                        <div className="col-lg-6 col-sm-12 y_line">
                            <h2>Meeting With Mentor</h2>
                            <p>coming soon...</p>
                            <button className="btn btn-primary" disabled="true">Join Meeting </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container myapp my-4" id="up-ass-box">
                <h2>Upcoming Assignment</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mycardrow" id="up-ass-row">

                    {
                        upcomingAssighnment.map((e) => {
                            return <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <p className="card-text">{e.title}</p>
                                    </div>
                                </div>
                            </div>;

                        })

                    }
                </div>
                <hr />
            </div>

            <div className="container myapp my-4" id="up-ass-box">
                <h2>Upcoming Group Events</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mycardrow" id="up-ass-row">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">No active Group Events</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">Past Group Event </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="container myapp my-4" id="up-ass-box">
                <h2>Upcoming Group Events</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mycardrow" id="up-ass-row">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">No active Quizzes</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">Past Quizzes </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="container myapp my-4" id="up-ass-box">
                <h2>Past Lecture</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mycardrow lecture" id="up-ass-row">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">Starting With Node.js 31st August</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">React wrap up- 30th Aug, 21 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">Catchup with Vineet - 27th Aug, 21</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">Past Lectures </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="container myapp my-4" id="up-ass-box">
                <h2>Past Meetings</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mycardrow lecture" id="up-ass-row">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">Starting With Node.js 31st August</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">React wrap up- 30th Aug, 21 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">Catchup with Vineet - 27th Aug, 21</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">Past Lectures </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="container">
               <div className="notes">
               <h1>Notes</h1>
               <button className="btn btn-primary btn-sm">Read Now</button>
               </div>
            </div>
        </>
    )

}
