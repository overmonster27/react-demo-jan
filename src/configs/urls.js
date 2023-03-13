import axios from "axios";

const axiosService = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

const urls = {
    users: '/users',
    posts: '/posts',
    comments: '/comments'
};

export {axiosService, urls}