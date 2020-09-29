import React from 'react';
import '../styles/Footer.scss';
import Linkedin from '../styles/images/linkedin.svg';
import Github from '../styles/images/github.svg';
function Footer() {
    return (
        <div className='contact' id='contact'>
            <div className='info'>
                <h3>Let's talk</h3>
                <p className='email'>
                    Send me{' '}
                    <a href='mailto:mwafy092@gmail.com' target='_blank'>
                        email
                    </a>
                </p>
                <p className='footer'>
                    Mustafa Mwafy <span>@ 2020. All Rights Reserved</span>
                </p>
            </div>

            <div className='social'>
                <h3>Follow me on</h3>
                <div className='social-icons'>
                    <a
                        href='https://www.linkedin.com/in/mwafy/'
                        target='_blank'>
                        <img src={Linkedin} alt='' />
                    </a>
                    <a href='https://github.com/mwafy092' target='_blank'>
                        <img src={Github} alt='' />
                    </a>
                </div>
                <div className='phone'>
                    <i class='fas fa-mobile-alt'></i>
                    <a href='tel:201010009646'>01010009646</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
