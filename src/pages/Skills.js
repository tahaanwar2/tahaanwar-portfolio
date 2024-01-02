import React from "react";
import Navbar from "../pages/Navbar";
import "./Navbar.css";
import "./Skills.css";
import Heading from './Skillheading';



function Skills() {
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <Heading />
            <section className="resume-section" id="skills">
                <div className="resume-section-content" style={{ textAlign: "left" }}>
                    {/* <h2 className="mb-5">Skills</h2> */}
                    <section className="skills" id="skills">
                        <div className="grip-container">
                            <div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/React.png" alt="" className="left" />
                                <div className="right">
                                    <h3> React</h3>

                                </div>
                            </div>

                            <div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/Html.png" alt="" className="left" />
                                <div className="right">
                                    <h3>Html </h3>

                                </div>
                            </div>

                            <div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/CSS.png" alt="" className="left" />
                                <div className="right">
                                    <h3>CSS</h3>

                                </div>
                            </div>
                            <div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/bo.png" alt="" className="left" />
                                <div className="right">
                                    <h3>Bootstrap</h3>

                                </div>
                            </div>
                            <div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/js.png" alt="" className="left" />
                                <div className="right">
                                    <h3>JavaScript</h3>

                                </div>
                            </div>



                            <div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/py.png" alt="" className="left" />
                                <div className="right">
                                    <h3>Python</h3>

                                </div>
                            </div><div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/msql.png" alt="" className="left" />
                                <div className="right">
                                    <h3>MySQL</h3>

                                </div>
                            </div><div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/wp.png" alt="" className="left" />
                                <div className="right">
                                    <h3>WordPress</h3>

                                </div>
                            </div>

                            <div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/c.png" alt="" className="left" />
                                <div className="right">
                                    <h3> C Language</h3>
                                </div>
                            </div>

                            <div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/c++.jpg" alt="" className="left" />
                                <div className="right">
                                    <h3>C++</h3>

                                </div>
                            </div>

                            <div className="boxs" style={{ marginTop: '20px' }}>
                                <img src="/img/gd.png" alt="" className="left" />
                                <div className="right">
                                    <h3>Fundamental of Graphic Design</h3>

                                </div>
                            </div>

                            <div className="boxs margin-top" style={{ marginTop: '20px' }}>
                                <img src="/img/ts.jpg" alt="" className="left" />
                                <div className="right">
                                    <h3>Technical Support Fundamentals</h3>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>

    );
}

export default Skills;
