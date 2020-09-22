import React from 'react';
import Pic1 from '../styles/projects/travel1.png';
import Pic2 from '../styles/projects/travel2.png';
import Pic3 from '../styles/projects/travel3.png';
import Pic11 from '../styles/projects/hotel1.png';
import Pic12 from '../styles/projects/hotel2.png';
import Pic13 from '../styles/projects/hotel3.png';
import '../styles/Works.scss';
function Works() {
    return (
        <div className='works'>
            <h2>Latest Projects</h2>
            <div className='project-container'>
                <div className='project'>
                    <h3>Travel App</h3>
                    <div className='tools'>
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Javascript</div>
                        <div>Web Api</div>
                        <div>Webpack</div>
                    </div>
                    <img src={Pic1} alt='' />
                    <img src={Pic2} alt='' />
                    <img src={Pic3} alt='' className='vimg' />
                </div>
                <div className='project'>
                    <h3>Dog Hotel</h3>
                    <div className='tools'>
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Javascript</div>
                    </div>
                    <img src={Pic11} alt='' />
                    <img src={Pic12} alt='' />
                    <img src={Pic13} alt='' className='vimg' />
                </div>
            </div>
        </div>
    );
}

export default Works;
