import React from "react";
import Navbar from "../pages/Navbar";
import Heading from './Aboutheading';
import Certy from './Aboutcerty';
import './About.css';


const Education = () => {
    return (
        <div>
            <Navbar />
            <Heading />

            <div className="container-fluid p-0">
                <section className="resume-section" id="education">
                    <div className="resume-section-content">
                        <br />
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1 subheading mb-3">
                                <div className="subheading mb-3">
                                    <h2>B.S. SOFTWARE ENGINEERING</h2>
                                    <h3 className="text-primary font-weight-bold d-block year">(2023)</h3>
                                </div>
                                <h3 className="mb-0 from-institution-text">
                                    From: <span className="from-text">Sir Syed University of Engineering and Technology</span>
                                </h3>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1 subheading mb-3">
                                <div className="subheading mb-3">
                                    <h2>H.S.C  Intermediate: Pre-Engineering</h2>
                                    <h3 className="text-primary font-weight-bold d-block year">(2017)</h3>
                                </div>
                                <h3 className="mb-0 from-institution-text">
                                    From: <span className="from-text">From:-  Govt. Dehli College </span>
                                </h3>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1 subheading mb-3">
                                <div className="subheading mb-3">
                                    <h2>S.S.C  Matriculation: Computer Science</h2>
                                    <h3 className="text-primary font-weight-bold d-block year">(2015)</h3>
                                </div>
                                <h3 className="mb-0 from-institution-text">
                                    From: <span className="from-text"> Hilton Public School </span>
                                </h3>
                            </div>
                        </div>                   </div>
                </section>

                <section className="resume-section" id="certifications">
                    <div className="resume-section-content">
                        <br />
                        <br />
                        <Certy />

                        <ul className="fa-ul mb-0">
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-trophy text-warning"></i>
                                </span>
                                Complete JavaScript with HTML5, CSS (Udemy)
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                HTML, CSS & Bootstrap (Udemy)
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>

                                JavaScript and jQuery (Udemy)
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>

                                Web Design for or Web Developers (Udemy)
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>

                                Getting Started With Application Development (Coursera)
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>

                                Complete Wordpress Website Developer Course (Udemy)

                            </li>

                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>


                                Enterprise Systems (Coursera)
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>

                                Technical Support Fundamentals (Coursera)
                            </li>

                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                The Bits and Bytes of Computer Networking (Coursera)
                            </li> <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                Fundamentals of Graphic Design (Coursera)
                            </li>
                        </ul>


                    </div>
                </section>
            </div>
        </div>
    );
};

export default Education;
