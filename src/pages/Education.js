import React from "react";
import Navbar from "../pages/Navbar";

const Education = () => {
    return (
        <div class="container-fluid p-0">
            <Navbar />


            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <br />
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Sir Syed University of Engineering and Technology </h3>
                            <div class="subheading mb-3">B.S. SOFTWARE ENGINEERING</div>

                        </div>
                        <div class="flex-shrink-0">
                            <span class="text-primary">(2023) </span>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Govt. Dehli College </h3>
                            <div class="subheading mb-3">Intermediate: Pre-Engineering</div>

                        </div>
                        <div class="flex-shrink-0">
                            <span class="text-primary">(2017)</span>
                        </div>
                    </div>


                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Hilton Public School  </h3>
                            <div class="subheading mb-3">Matriculation: Computer Science</div>

                        </div>
                        <div class="flex-shrink-0">
                            <span class="text-primary">(2015)</span>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
        </div>

    );
};

export default Education;


