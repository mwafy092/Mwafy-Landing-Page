import React, { Component } from 'react';
import '../styles/Header.scss';
import Profile from '../styles/images/profile.jpg';

class Header extends Component {
    state = {};
    render() {
        return (
            <div className='header'>
                <div className='text'>
                    <h3 className='animate1'>Front-End Developer</h3>
                    <h1 className='animate2'>Hello, World</h1>
                    <p className='animate3'>
                        I'm a Javascript developer, works with React framework
                        and connect your data to Node Server.
                    </p>

                    <a href='' className='animate4'>
                        Know more
                    </a>
                </div>
                <div className='profile'>
                    <div className='image animate4'>
                        <img src={Profile} alt='' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
