import React from 'react';
import '../styles/Contact.scss';
import Linkedin from '../styles/images/linkedin.svg';
import Github from '../styles/images/github.svg';
function Contact() {
    return (
        <div className='contact'>
            <div className='info'>
                <h3>Let's talk</h3>
                <p className='email'>
                    Send me <a href='#'>email</a>
                </p>
                <p className='footer'>
                    Mustafa Mwafy <span>@ 2020. All Rights Reserved</span>
                </p>
            </div>

            <div className='social'>
                <h3>Follow me on</h3>
                <div className='social-icons'>
                    <img src={Linkedin} alt='' />
                    <img src={Github} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Contact;
