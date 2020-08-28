import React, { useState, useEffect } from 'react';
import axiosPost from '../../../axiosPost';
import PostContainer from '../../../components/PostContainer/PostContainer';
import './Home.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

const Home = props => {
    const [posts, setPosts] = useState([]);
    const [preloader, setPreloader] = useState(true);

    let postContainer = (
        <div className="home-spinner">
            <Spinner />
        </div>
    );

    useEffect(() => {
        const getPostsData = async () => {
            const postsResponse = await axiosPost.get('/posts.json');
            console.log(postsResponse.data)
            const postsCopy = [];
            for (let key in postsResponse.data) {
                postsCopy.push({
                    ...postsResponse.data[key],
                    id: key,
                });
            };
            setPosts(postsCopy);
            setPreloader(false);
        }
        getPostsData().catch(console.error);
    }, []);

    const getSinglePostsData = async id => {
        const index = posts.findIndex(p => p.id === id);
        props.history.push({
            pathname: '/posts/' + posts[index].id,
        });
    };

    if (!preloader) {
        postContainer = posts.map(post => (
            <PostContainer key={post.id} title={post.title} date={post.date} time={post.time} clicked={() => getSinglePostsData(post.id)}/>
        ));
    };



    return (
        <div className="main-div home-div">
            <div className="container">
                <div className="home-inner">
                    {postContainer}
                </div>
            </div>
        </div>
    );
};

export default Home;