import React, { useEffect, useState } from 'react';
import axiosPost from '../../../axiosPost';
import './EditPost.css';

const EditPost = props => {

    const [postData, setPostData] = useState({
        title: '',
        description: '',
        time: '',
        date: '',
    });

    useEffect(() => {
        const pageData = async () => {
            const pageResponse = await axiosPost.get('/posts/' + props.match.params.id + '.json');
            const postDataCopy = {
                title: pageResponse.data.title,
                description: pageResponse.data.description,
                time: pageResponse.data.time,
                date: pageResponse.data.date,
            };
            setPostData(postDataCopy);
        };
        pageData().catch(console.error);
    },[]);


    const postDataChanged = event => {
        const name = event.target.name;
        const value = event.target.value;

        const postDataCopy = {
            ...postData,
            [name]: value,
        }

        setPostData(postDataCopy);
    };

    const save = async () => {
        await axiosPost.put('/posts/' + props.match.params.id + '.json', postData);
        props.history.replace('/posts/' + props.match.params.id);
    }

    const back = () => {
        props.history.replace('/posts/' + props.match.params.id);
    }

    return (
        <div className="edit-post-div">
            <div className="container">
                <input className="edit-post-input edit-post-form-elem" name='title' onChange={postDataChanged} value={postData.title} />
                <textarea className="edit-post-textarea  edit-post-form-elem" name='description' onChange={postDataChanged} value={postData.description} />
                <button className="edit-post-btn edit-post-form-elem" onClick={save}>Save</button>
                <button className="edit-post-btn edit-post-form-elem" onClick={back}>Cancel</button>
            </div>
        </div>
    );
};

export default EditPost;