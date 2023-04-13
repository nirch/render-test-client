import axios from 'axios';

const server = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URI
    ? process.env.REACT_APP_SERVER_URI
    : 'http://localhost:3000',
});

function fetchPosts() {
  return server.get('/posts');
}

export { fetchPosts };
