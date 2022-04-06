import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from '../../../pages/About';
import Posts from '../../../pages/Posts';
import Error from '../../../pages/Error';

const AppRouter = () => {
    return (
        <div>
        <Routes>
          <Route path='/error' element={<Error />}/>
          <Route path='/*' element={<Posts />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        </div>
    );
};

export default AppRouter;