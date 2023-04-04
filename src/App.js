import './App.css';
import { useEffect, useState } from 'react';
import { fetchPosts } from './services/api';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      {posts.map(post => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}

export default App;
