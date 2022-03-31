import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import Counter from './components/Counter/Counter';
import PostFilter from './components/PostFilter/PostFilter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/Postlist/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import './styles/App.css';

function App() {


  const [posts, setPosts] = useState ([
        {id : 1, title: 'as', body: 'post js'},
        {id : 2, title: 'cffss', body: 'post js'},
        {id : 3, title: 'ddsd', body: 'post js'},
        {id : 4, title: 'JavaScript9', body: 'post js'},
      ])  

    const [filter, setFilter] = useState({sort: '', query:''})

    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
      if (filter.sort) {
        return [...posts].sort((a, b) => (a[filter.sort] > b[filter.sort] ? 1 : -1))
      }
      return posts;
    },[filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    },[filter.query, sortedPosts])

    const createPost = (newPost) => {    //add post
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id)) //remove post
    }

    

  return (
    <div className="App">
    <MyButton style={{marginTop:'20px'}} onClick={()=> setModal(true)}>Add Post</MyButton>
    <MyModal visible={modal} setVisible={setModal}>
    <PostForm create={createPost}/>
    </MyModal>
    <PostFilter filter={filter} setFilter={setFilter}/>
    <PostList remove = {removePost} posts={sortedAndSearchedPosts} title = 'List 1'/>
    <hr style={{margin:'15px 0'}}></hr>
    <Counter />    

    </div>
  );
}

export default App;