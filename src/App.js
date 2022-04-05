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
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';

function App() {


  const [posts, setPosts] = useState ([
        {id : 1, title: 'Subaru', body: 'Gas'},
        {id : 2, title: 'Audi', body: 'Diesel'},
        {id : 3, title: 'Dodge', body: 'Gas'},
        {id : 4, title: 'Ferrari', body: 'Gas'},
      ])  

    const [filter, setFilter] = useState({sort: '', query:''})

    const [totalPages, setTotalPages] = useState(0)

    const [limit, setlimit] = useState(10)

    const [page, setPage] = useState(1)

    const [modal, setModal] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    let pagesArray = getPagesArray(totalPages)


    const [fetchPosts, isPostsLoading, postError] = useFetching(async()=> {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data)
      const totalCount = response.headers['x-tota;-count']
      setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(()=> {
        fetchPosts()
    },[])

    const createPost = (newPost) => {  
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id)) 
    }

  return (
    <div className="App">
    <MyButton onClick={fetchPosts}>Get Posts</MyButton>
    <MyButton style={{marginTop:'20px'}} onClick={()=> setModal(true)}>Add Post</MyButton>
    <MyModal visible={modal} setVisible={setModal}>
    <PostForm create={createPost}/>
    </MyModal>
    <PostFilter filter={filter} setFilter={setFilter}/>
    {postError &&
      <h1>Error ${postError}</h1>
    }
    {isPostsLoading
      ? <div style={{display:'flex', justifyContent:'center', marginTop: 50}}><Loader /></div>
      : <PostList remove = {removePost} posts={sortedAndSearchedPosts} title = 'List 1'/>
    }  
  <div style={{marginTop: 30}}>
  {pagesArray.map(p => 
    <MyButton>123</MyButton>
      )}
  </div>
    

    <hr style={{margin:'15px 0'}}></hr>
    <Counter />    

    </div>
  );
}

export default App;