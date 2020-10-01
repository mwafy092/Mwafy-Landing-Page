import React, { Component } from 'react';
import '../styles/Header.scss';
import Profile from '../styles/images/profile-bw.jpg';
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {};
    render() {
        return (
            <div className='header'>
                <div className='text'>
                    <h3 className='animate1'>Front-End Developer</h3>
                    <h1 className='animate2'>Hello, World</h1>
                    <p className='animate3'>
                        This is Mustafa Mwafy, a front end developer who is
                        skilled in building web apps using a cutting edge
                        front-end technologies like Javascript and React.
                    </p>

                    <Link to='/about' className='animate4'>
                        know more about my skills
                    </Link>
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
