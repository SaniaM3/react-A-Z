import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter/Counter';
import PostList from './components/Postlist/PostList';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState ([
        {id : 1, title: 'JavaScript', body: 'post js'},
        {id : 2, title: 'JavaScript', body: 'post js'},
        {id : 3, title: 'JavaScript', body: 'post js'},
        {id : 4, title: 'JavaScript', body: 'post js'},
      ])  

  return (
    <div className="App">
    <Counter />

    <form>
        <input type='text' placeholder='post name'/>
        <input type='text' placeholder='post description'/>
        <MyButton disabled>Create post</MyButton>
    </form>
    <PostList posts={posts} title = 'List 1'/>

    </div>
  );
}

export default App;