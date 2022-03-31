import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter/Counter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/Postlist/PostList';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';
import localeCompare from "locale-compare";

function App() {


  const [posts, setPosts] = useState ([
        {id : 1, title: 'as', body: 'post js'},
        {id : 2, title: 'cffss', body: 'post js'},
        {id : 3, title: 'ddsd', body: 'post js'},
        {id : 4, title: 'JavaScript9', body: 'post js'},
      ])  

    const [selectedSort, setSelectedSort] = useState('')
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
      setSelectedSort(sort);
      setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])));
    }

  return (
    <div className="App">
    <Counter />
    <PostForm create={createPost}/>
    <hr style={{margin:'15px 0'}}></hr>
    <MySelect 
    value={selectedSort}
    onChange={sortPosts}
      defaultValue='Sort'
      options={[
        {value: 'titile', name:'name'},
        {value: 'body', name:'description'}
      ]}
    />
    {posts.length !==0
    ? <PostList remove = {removePost} posts={posts} title = 'List 1'/>
    : <h2 style={{textAlign:'center'}}>Posts not found!</h2>
    } 
    

    </div>
  );
}

export default App;