import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
          <div className={s.navbar__links}>
            <Link to='/about'>About</Link>
            <Link to='/posts'>Posts</Link>
          </div>
        </div>
    );
};

export default Navbar;