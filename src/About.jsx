import React, { Component } from 'react';
import './About.scss';
class About extends Component {
    state = {};
    render() {
        return (
            <div className='about'>
                <div className='skills'></div>
                <div className='intro'>
                    <h4>Nice to meet me!</h4>
                    <h1>
                        Hello, This is Mustafa<span>Mwafy</span>
                    </h1>
                    <h3>
                        Being Front-End developer is an amazing adventure full
                        of magic.
                    </h3>
                    <p>
                        I’m a passionate junior front-end developer and my
                        changing career journey started with an introduction to
                        computer science course by Harvard, then i fall in love
                        in coding more, after that i got 2 front-end
                        nano-degrees from udacity and a couple of javascript
                        certificates with a lot of projects implemented, My
                        target in the next few years is to be one of the most
                        successful front-end engineers , I'm learning and will
                        keep learning and searching to be veteran and successful
                        coder.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
