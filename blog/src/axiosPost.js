import axios from 'axios';

const axiosPost = axios.create({
    baseURL: 'https://blog-2ff49.firebaseio.com/',
});

export default axiosPost;