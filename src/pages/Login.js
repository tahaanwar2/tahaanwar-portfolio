import React, { useState } from "react";
import { Form, Input, Modal, Button } from "antd";
import { useAuth } from "./UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const { UserLogin } = useAuth();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const UserHandler = (e) => {
        const { name, value } = e.target;
        setUser((pre) => ({
            ...pre,
            [name]: value,
        }));
    };

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        if (email === "" || password === "") {
            return showErrorModal("Fill All The Fields");
        }
        try {
            await UserLogin(email, password);
            navigate("/home");
        } catch (error) {
            let errorMessage = "An error occurred. Please try again.";
            if (error.code === "auth/user-not-found") {
                errorMessage = "User Not Found";
            } else if (error.code === "auth/wrong-password") {
                errorMessage = "Wrong Password";
            }
            showErrorModal(errorMessage);
        }
    };

    const showErrorModal = (errorMessage) => {
        Modal.error({
            title: "Error",
            content: errorMessage,
            centered: true,
        });
    };

    return (
        <div className="">
            <div className="container-log">
                <form onSubmit={SubmitHandler} className="form">
                    <div className="inputfield">
                        <h2>Login Form</h2>

                    </div>

                    <div className="inputfield">
                        <Form.Item className="email-text"
                            label={<span style={{ fontWeight: "bold" }}>Email </span>}
                        >
                            <Input
                                className="input-text"
                                type={user.email}
                                name="email"
                                onChange={UserHandler}
                            />
                        </Form.Item>
                    </div>

                    <div className="inputfield">
                        <Form.Item className="email-text"
                            label={<span style={{ fontWeight: "bold" }}>Password</span>}
                        >
                            <Input.Password
                                className="input-passwordtext"
                                value={user.password}
                                name="password"
                                onChange={UserHandler}
                            />
                        </Form.Item>
                    </div>


                    <div className="inputfield">
                        <Form.Item>
                            <br />

                            <Button className="submit-btn" type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </div>

                    <div className="inputfield">
                        <p className="account-para">Don't have an account?{" "}
                            <Link to="../signup" className="link">
                                {"Signup"}
                            </Link>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;
