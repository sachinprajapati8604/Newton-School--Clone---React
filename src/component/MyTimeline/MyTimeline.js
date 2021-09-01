import React from 'react'
import './MyTimeline.css'
export default function MyTimeline() {
    return (
        <>
            <div className="container-fluid fill-blue">
                <div className="row g-4 timeline-row mx-2 gx-4">
                    <div className="col-3 tl-col">
                        <div class="p-3 border ">
                            <h5>Attendance</h5>
                            <p>Overall <br /> (72/81)</p>
                            <h3>88%</h3>
                            <p>Last 7 lectures <br /> (7/7)</p>
                            <h3>100%</h3>
                        </div>
                    </div>
                    <div className="col-6 tl-col">
                        <div class="p-3 border ">
                            <h5>Assignment Questions</h5>
                            <div className="row col-12">
                                <div className="col-6">
                                    <p>Overall <br /> (117/125)</p>
                                    <h3>93%</h3>
                                    <p>Last 7 assignments <br /> (35/38)</p>
                                    <h3>92%</h3>
                                </div>
                                <div className="col-6">
                                    <h5>Coding</h5>
                                    <p className="mb-0">Attempted  70/71</p>
                                    <p className="mb-0">Passed 64/71</p>
                                    <br />
                                    <div className="row col-12">
                                        <div className="col-6">
                                            Frontend <br />
                                            Attempted
                                            36/36
                                            Passed
                                            36/36
                                        </div>
                                        <div className="col-6">
                                            Projects <br />
                                            Attempted
                                            17/17
                                            Passed
                                            14/17
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 tl-col">
                        <div class="p-3 border ">
                            <h5>Quizzes</h5>
                            <p>Overall <br /> (3/4)</p>
                            <h3>50%</h3>
                            <p>Last 7 assessments <br /> (3/4)</p>
                            <h3>75%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
