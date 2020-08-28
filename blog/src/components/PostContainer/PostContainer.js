import React from 'react';
import './PostContainer.css';

const PostContainer = props => {

    return (
        <div className="post-div">
            <h3 className="post-title">{props.title}</h3>
            <span className="post-date">Created on : {props.date}</span>
            <span className="post-time">{props.time}</span>
            <button className="read-more-btn" onClick={props.clicked}>Read More</button>
        </div>
    );
};

export default PostContainer;