// Home.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {

        navigate("/login");
    }, [navigate]);

    return (
        <div>
            { }
        </div>
    );
};

export default Home;
