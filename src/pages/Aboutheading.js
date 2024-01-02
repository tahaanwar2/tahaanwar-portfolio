import React, { useEffect, useState } from 'react';
import './Heading.css';

const Heading = () => {
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const targetText = 'MY EDUCATIONS';

        const intervalId = setInterval(() => {
            setText(targetText.slice(0, currentIndex + 1));
            setCurrentIndex((prevIndex) => (prevIndex + 1) % targetText.length);
        }, 300);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className="centered-container">
            <h1 className="typewriter-heading">{text}</h1>
        </div>
    );
};

export default Heading;
