import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNavigation.css';

const HeaderNavigation = () => {
    return (
        <header>
            <div className="container">
                <nav className="header-nav">
                    <ul className="header-list">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/posts/add' activeClassName="selected">Add Post</NavLink>
                        <NavLink to='/about' activeClassName="selected">About</NavLink>
                        <NavLink to='/contacts' activeClassName="selected">Contacts</NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderNavigation;