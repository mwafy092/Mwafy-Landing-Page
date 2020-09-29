import React, { useState } from 'react';
import '../styles/AboutBlock.scss';
function AboutBlock() {
    const [skills, setSkills] = useState([
        { name: 'HTML5', score: 5 },
        { name: 'CSS3', score: 5 },
        { name: 'SASS', score: 5 },
        { name: 'JavaScript', score: 5 },
        { name: 'ES6', score: 5 },
        { name: 'Web Api', score: 5 },
        { name: 'Node', score: 5 },
        { name: 'Express', score: 5 },
        { name: 'Webpack', score: 3 },
        { name: 'React', score: 3 },
        { name: 'Linux', score: 5 },
        { name: 'Git', score: 5 },
    ]);
    return (
        <div className='about-block'>
            <div className='skills'>
                <h3>Skills</h3>
                {skills.map((skill) => (
                    <div className='skill'>
                        <div>{skill.name}</div>
                        <div className='stars'>{'⭐'.repeat(skill.score)}</div>
                    </div>
                ))}
                <div className='skill-set'>
                    <p className='responsive'>Responsive ...design</p>
                    <p className='java'>Javascript Geek</p>
                    <p className='react'>i love react</p>
                    <p className='css'>
                        design with <span>css</span>
                    </p>
                    <p className='linux'>linux geek</p>
                </div>
            </div>
            <div className='intro'>
                <h1>
                    Hello, This is Mustafa<span>Mwafy</span>
                </h1>
                <h3>
                    "Being Front-End developer is an amazing adventure full of
                    magic."
                </h3>
                <p>
                    I'm a linux user skilled in using linux command line
                    professionally, and i like to work with open source tools.
                </p>
                <hr />
                <p className='center'>
                    I have a great skills with HTML5, CSS3 , SASS and Bootstrap
                    so i can implement any web-site design, also i can write
                    web-apps using Javascript, ES6 and React JS FrameWork. Also
                    i skilled in using Web-API and Asynchronous Javascript to
                    implement any kind of API.
                </p>
                <hr />
                <p>
                    I can work with backend using Node and Express, and finally
                    connect everything using Webpack building tool and Git
                    service, also i'm using service workers to keep my web-app
                    working offline like an app.
                </p>
            </div>
        </div>
    );
}

export default AboutBlock;
