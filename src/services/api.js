import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3000',
});

function fetchPosts() {
  return server.get('/posts');
}

export { fetchPosts };
