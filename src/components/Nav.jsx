import React, { useState, useEffect } from 'react';
import '../styles/Nav.scss';

const Nav = () => {
    const [nav, setNav] = useState(false);

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
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>works</li>
                    <li>contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
