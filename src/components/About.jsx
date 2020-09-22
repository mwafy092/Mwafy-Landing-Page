import React, { useState } from 'react';
import '../styles/About.scss';
function About() {
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
    ]);
    return (
        <div className='about'>
            <div className='skills'>
                <h3>Skills</h3>
                {skills.map((skill) => (
                    <div className='skill'>
                        <div>{skill.name}</div>
                        <div className='stars'>{'* '.repeat(skill.score)}</div>
                    </div>
                ))}
            </div>
            <div className='intro'>
                <h4>Nice to meet me!</h4>
                <h1>
                    Hello, This is Mustafa<span>Mwafy</span>
                </h1>
                <h3>
                    Being Front-End developer is an amazing adventure full of
                    magic.
                </h3>
                <p>
                    I’m a passionate junior front-end developer and my changing
                    career journey started with an introduction to computer
                    science course by Harvard, then i fall in love in coding
                    more, after that i got 2 front-end nano-degrees from udacity
                    and a couple of javascript certificates with a lot of
                    projects implemented, My target in the next few years is to
                    be one of the most successful front-end engineers , I'm
                    learning and will keep learning and searching to be veteran
                    and successful coder.
                </p>
            </div>
        </div>
    );
}

export default About;
