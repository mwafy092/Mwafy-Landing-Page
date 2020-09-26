import React, { useState, useEffect } from 'react';
import '../styles/Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [nav, setNav] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 60) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    window.addEventListener('scroll', changeNav);

    return (
        <div className={nav ? 'scrollEffect nav' : 'nav'}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className='logo'>
                    mwafy
                    <span>Lab</span>
                </div>
            </Link>
            <nav>
                <div className='mobile'>
                    <Link to='/projects' style={{ textDecoration: 'none' }}>
                        <button
                            style={
                                showMenu
                                    ? { display: 'none' }
                                    : { display: 'block' }
                            }>
                            projects
                        </button>
                    </Link>
                    <i
                        className={
                            showMenu
                                ? 'fas fa-times menu-icon'
                                : 'fas fa-bars menu-icon'
                        }
                        onClick={() => setShowMenu(!showMenu)}></i>
                </div>
                <ul
                    className={
                        showMenu ? 'main-menu mobile-menu' : 'main-menu'
                    }>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <li>home</li>
                    </Link>
                    <Link to='/about' style={{ textDecoration: 'none' }}>
                        <li>about</li>
                    </Link>
                    <Link to='/projects' style={{ textDecoration: 'none' }}>
                        <li>projects</li>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <li onScroll='#contact'>contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
