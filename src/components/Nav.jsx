import React, { Component } from 'react';
import '../styles/Nav.scss';
import Mail from '../styles/images/mail.svg';
class Nav extends Component {
    state = {};
    render() {
        return (
            <div className='nav'>
                <div className='logo'>
                    wafy
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
