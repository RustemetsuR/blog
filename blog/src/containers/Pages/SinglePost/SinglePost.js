import React, { useState, useEffect } from 'react';
import './SinglePost.css';
import axiosPost from '../../../axiosPost';

const SinglePost = props => {

    const [post, setPost] = useState({
        title: '',
        time: '',
        date: '',
        description: '',
        id: ''
    });


    useEffect(() => {
        const singlePostData = async () => {
            const postResponse = await axiosPost.get('/posts/' + props.match.params.id + '.json');
            const postCopy = {
                title: postResponse.data.title,
                time: postResponse.data.time,
                date: postResponse.data.date,
                description: postResponse.data.description,
                id: props.match.params.id,
            };
            setPost(postCopy);
            console.log(postCopy);
        }
        singlePostData().catch(console.error);
    }, [props.match.params.id]);

    const removePost = async () => {
        await axiosPost.delete('/posts/' + props.match.params.id + '.json');
        props.history.replace('/');
    };

    const editPost = () => {
        props.history.replace('/posts/' + props.match.params.id + '/edit/')
    };


    return (
        <div className="single-post-div">
            <div className="container">
                <div className="single-post-inner">
                    <div>
                        <button className="single-post-btn" onClick={editPost}>Edit</button>
                        <button className="single-post-btn" onClick={removePost}>Remove</button>
                    </div>
                    <h3 className="single-post-title">{post.title}</h3>
                    <p className="single-post-description">{post.description}</p>
                    <span className="single-post-date">Created on : {post.date}</span>
                    <span className="single-post-time">{post.time}</span>

                    <div>
                        <button className="single-post-btn" onClick={editPost}>Edit</button>
                        <button className="single-post-btn" onClick={removePost}>Remove</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SinglePost;