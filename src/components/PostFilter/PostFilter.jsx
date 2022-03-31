import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
    <MyInput 
      placeholder='search'
      value={filter.query}
      onChange={e => setFilter({...filter, query: e.target.value})}
    
    />
    <MySelect 
    value={filter.sort}
    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      defaultValue='Sort'
      options={[
        {value: 'titile', name:'name'},
        {value: 'body', name:'description'}
      ]}
    />
        </div>
    );
};

export default PostFilter;