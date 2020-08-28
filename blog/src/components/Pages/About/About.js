import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="main-div about-div">
            <div className="container">
                <h1 className="about-title">About Us</h1>
                <p className="about-text">The Lorem Ipsum Company is a full-service digital marketing
                agency based in California, specializing in content marketing,
                social media marketing, and search engine optimization.
                Lorem Ipsum is the dummy text used for decades in desktop publishing as a space holder.
                It is commonly referred to as dummy text, blind text or greeked text.
                Founded in 2012, The Lorem Ipsum Company develops effective content, SEO and social media strategies for forward thinking companies.
                We have a proven track record in increasing search engine rankings.
                Our team of specialists consistently delivers outstanding results combining creative ideas with our
                vast experience.We can help you build a sustainable, meaningful relationship
                with your clients by engaging them with your brand using social media.</p>
            </div>
        </div>
    );
};

export default About;