import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter/Counter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/Postlist/PostList';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState ([
        {id : 1, title: 'JavaScript', body: 'post js'},
        {id : 2, title: 'JavaScript', body: 'post js'},
        {id : 3, title: 'JavaScript', body: 'post js'},
        {id : 4, title: 'JavaScript', body: 'post js'},
      ])  
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
    <Counter />
    <PostForm create={createPost}/>
    <PostList remove = {removePost} posts={posts} title = 'List 1'/>

    </div>
  );
}

export default App;