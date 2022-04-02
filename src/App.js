import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter/Counter';
import PostFilter from './components/PostFilter/PostFilter';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/Postlist/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
import { useEffect } from 'react';
import PostService from './API/PostService';

function App() {


  const [posts, setPosts] = useState ([
        {id : 1, title: 'Subaru', body: 'Gas'},
        {id : 2, title: 'Audi', body: 'Diesel'},
        {id : 3, title: 'Dodge', body: 'Gas'},
        {id : 4, title: 'Ferrari', body: 'Gas'},
      ])  

    const [filter, setFilter] = useState({sort: '', query:''})

    const [modal, setModal] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(()=> {
        fetchPosts()
    },[])

    const createPost = (newPost) => {    //add post
        setPosts([...posts, newPost])
        setModal(false)
    }


    async function fetchPosts(){
      const posts = await PostService.getAll();
      setPosts(posts)
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id)) //remove post
    }

  return (
    <div className="App">
    <MyButton onClick={fetchPosts}>Get Posts</MyButton>
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