import React, { Component } from 'react';
import './Nav.scss';
import Mail from './icons/mail.svg';
class Nav extends Component {
    state = {};
    render() {
        return (
            <div className='nav'>
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
                        <li className='mail'>
                            <img src={Mail} alt='' />
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;
