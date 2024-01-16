import React, { useEffect, useState } from 'react';
import profileImage from '../assests/tahapic.png';
import resumePdf from '../assests/TAHA-Resume.pdf';
import { Link } from 'react-router-dom';
import Navbar from '../pages/Navbar';

import "./Home.css";

const Header = () => {
    const [text, setText] = useState('');
    const [subText, setSubText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const targetText = 'TAHA ANWAR';
        const targetSubText = 'SOFTWARE ENGINEERR';

        const intervalId = setInterval(() => {
            if (currentIndex < targetText.length) {
                setText((prevText) => prevText + targetText[currentIndex]);
            } else if (currentIndex - targetText.length < targetSubText.length) {
                setSubText((prevSubText) => prevSubText + targetSubText[currentIndex - targetText.length]);
            }

            setCurrentIndex((prevIndex) => (prevIndex + 1) % (targetText.length + targetSubText.length));

            if (currentIndex === targetText.length + targetSubText.length - 1) {
                setCurrentIndex(0);
                setText('');
                setSubText('');
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <header>
            <Navbar />
            <div className="profile-info">
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
                <div className="profile-details">
                    <h1 className="typewriter-h1">{text}</h1>

                    <h2 className="typewriter-h2">{subText}</h2>

                    <br />

                    <div className="footer-data">
                        <div className="fixed-para-container">
                            <p className="para-text">
                                {/* <br />
                                <br /> */}
                                As a highly motivated and enthusiastic Software Engineer, I am committed to utilizing my technical skills and creativity to deliver high-quality software solutions. My passion for coding and learning new technologies has led me to pursue a career in software development. I am excited to continue growing as a developer and look forward to contributing to the success of your organization.
                            </p>
                        </div>
                        <br />

                        <div className="cta-container">

                            <a href={resumePdf} download="TAHA-Resume.pdf" className="">Download CV</a>
                            <span >
                                <Link to="/contact" className="cta-link">Contact Me</Link>
                            </span></div>
                    </div>
                </div>
                <br />
                <div className="prof-details">
                    <span className="me-4"></span>
                    <div className="mb-4">
                        <a className="me-4" href="https://www.facebook.com/taha.anwar2?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <img
                                className="img-fluid social-icon"
                                src="./img/facebook.png"
                                alt="Facebook Icon"
                                style={{ width: "32px", height: "auto", marginLeft: "120px", marginRight: "10px", marginTop: "-2px" }}
                            />
                        </a>
                        <span className="me-4"></span>
                        <a className="me-4" href="https://github.com/tahaanwar2" target="_blank" rel="noopener noreferrer">
                            <img
                                className="img-fluid social-icon"
                                src="./img/github.png"
                                alt="Github Icon"
                                style={{ width: "46px", height: "auto", marginRight: "10px" }}
                            />
                        </a>
                        <span className="me-4"></span>
                        <a className="me-4" href="https://www.linkedin.com/in/taha-anwar-2517a0218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <img
                                className="img-fluid social-icon"
                                src="./img/linkedin.png"
                                alt="LinkedIn Icon"
                                style={{ width: "26px", height: "auto", marginRight: "15px" }}

                            />
                        </a>


                        <span className="me-4"></span>
                        <a className="me-4" href="tel:+923322698020" target="_blank" rel="noopener noreferrer">
                            <img
                                className="img-fluid social-icon"
                                src="./img/call.png"
                                alt="call Icon"
                                style={{ width: "26px", height: "auto", marginRight: "15px" }}

                            />
                        </a>
                        <span className="me-4"></span>
                        <a className="me-4" href="https://wa.me/923322698020" target="_blank" rel="noopener noreferrer">
                            <img
                                className="img-fluid social-icon"
                                src="./img/whatsapp.png"
                                alt="Whatsapp Icon"
                                style={{ width: "26px", height: "auto", marginRight: "25px" }}

                            />
                        </a>
                        <span className="me-4"></span>
                        <a className="me-4" href="mailto:taha.anwar2@yahoo.com" target="_blank" rel="noopener noreferrer">
                            <img
                                className="img-fluid social-icon"
                                src="./img/yahoo.png"
                                alt="Yahoo Icon"
                                style={{ width: "26px", height: "auto", marginRight: "15px" }}

                            />
                        </a>

                        <span className="me-4"></span>
                        <a className="me-4" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <img
                                className="img-fluid social-icon"
                                src="./img/yutb.png"
                                alt="Yahoo Icon"
                                style={{ width: "26px", height: "auto", marginRight: "15px" }}
                            />
                        </a>
                    </div>

                </div>

            </div>





        </header >


    );
};

export default Header;
