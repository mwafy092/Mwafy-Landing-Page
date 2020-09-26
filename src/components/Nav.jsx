import React, { useState, useEffect } from 'react';
import '../styles/Nav.scss';

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
            <div className='logo'>
                mwafy
                <span>Lab</span>
            </div>
            <nav>
                <div className='mobile'>
                    <button
                        style={
                            showMenu
                                ? { display: 'none' }
                                : { display: 'block' }
                        }>
                        projects
                    </button>
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
                    <li>home</li>
                    <li>about</li>
                    <li>projects</li>
                    <li>contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
