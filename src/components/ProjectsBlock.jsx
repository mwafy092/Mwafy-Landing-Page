import React from 'react';
import Pic1 from '../styles/projects/travel1.png';
import Pic2 from '../styles/projects/travel2.png';
import Pic3 from '../styles/projects/travel3.png';
import Pic11 from '../styles/projects/hotel1.png';
import Pic12 from '../styles/projects/hotel2.png';
import Pic13 from '../styles/projects/hotel3.png';
import Pic21 from '../styles/projects/aircnc1.png';
import Pic22 from '../styles/projects/aircnc2.png';
import Pic23 from '../styles/projects/aircnc3.png';

import '../styles/ProjectsBlock.scss';
function ProjectsBlock() {
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
                </div>
                <div className='project'>
                    <h3>Dog Hotel</h3>
                    <div className='tools'>
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Javascript</div>
                    </div>
                    <img src={Pic11} alt='' />
                </div>
                <div className='project'>
                    <h3>Aircnc</h3>
                    <div className='tools'>
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Javascript</div>
                    </div>
                    <img src={Pic21} alt='' />
                </div>
                <div className='project'>
                    <h3>Aircnc</h3>
                    <div className='tools'>
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Javascript</div>
                    </div>
                    <img src={Pic21} alt='' />
                </div>
            </div>
            <button>show more projects</button>
        </div>
    );
}

export default ProjectsBlock;
