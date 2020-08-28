import React, { useState } from 'react';
import axiosPost from '../../../axiosPost';
import './AddPost.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

const AddPost = props => {

    const [post, setPost] = useState({
        title: '',
        description: '',
    });

    const [preloader, setPreloader] = useState(false);

    const postDataChanged = event => {
        const name = event.target.name;
        const value = event.target.value;
        setPost(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const addPostHandler = async event => {
        event.preventDefault();
        setPreloader(true);

        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        let minutes = date.getMinutes();

        if (month < 10) {
            month = '0' + month;
        };

        const dateOfThePost = day + '.' + month + '.' + year + ' ';
        const timeOfThePost = hour + ':' + minutes;
        const postData = {
            title: post.title,
            description: post.description,
            date: dateOfThePost,
            time: timeOfThePost,
        };

        try {
            await axiosPost.post('/posts.json', postData);
        } finally {
            props.history.replace('/');
        };
    };

    let form = (
        <form onSubmit={addPostHandler}>
            <div className="inp-div">
                <input
                    required
                    className="title-inp form-elem"
                    placeholder="Title"
                    value={post.title}
                    name="title"
                    onChange={postDataChanged} />

                <textarea
                    required
                    className="description-inp form-elem"
                    placeholder="Description"
                    value={post.description}
                    name="description"
                    onChange={postDataChanged} />
            </div>


            <button className="submit-btn form-elem" type='submit'>Post</button>
        </form>
    )

    if (preloader) {
        form = <Spinner />
    };

    return (
        <div className="add-post-div main-div">
            <div className="container">
                {form}
            </div>
        </div>
    );
};

export default AddPost;