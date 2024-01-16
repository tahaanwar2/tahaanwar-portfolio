import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

import Navbar from '../pages/Navbar';

const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Send");
    const [buttonColor, setButtonColor] = useState("#125963");

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Sending");
        

        const serviceID = "service_bbrqmg4";
        const templateID = "template_ckf45eb";
        const userID = "cwH3bJkhFRDixWgQW";

        emailjs
            .sendForm(serviceID, templateID, form.current, userID)
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    setButtonText("Send");
                    setButtonColor("#f9690e");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    setButtonText("Send");
                    setButtonColor("#f9690e");
                }
            );
    };

    return (
        <div>
            <Navbar />
            <div className="contact-form">
                <h1 className="contact-me">Contact Me</h1>
                <div className="container-form">
                    <form ref={form} >
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input
                            type="submit"
                            value={buttonText}
                            className="submit-button"
                            style={{ backgroundColor: buttonColor }} 
                            onClick={sendEmail}
    
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
