import React from 'react';
import '../styles/About.scss';
function About() {
    return (
        <div className='about'>
            <div className='skills-section animate3'>
                <h2>Skills</h2>
                <p>
                    Before anything i'm a linux user so i can work very
                    professionally with command line
                </p>
                <p>
                    I have a great skills with HTML5, CSS3 , SASS and Bootstrap
                    so i can implement any web-site design, also i can write
                    web-apps using Javascript, ES6 and React JS FrameWork.
                </p>
                <p>
                    Also i skilled in using Web-API and Asynchronous Javascript
                    to implement any kind of API.
                </p>
                <p>
                    I can work with backend using Node and Express, and finally
                    connect everything using Webpack building tool and Git
                    service, also i'm using service workers to keep my web-app
                    working offline like an app.
                </p>
            </div>

            <div className='learning-section animate4'>
                <h2>Learning Journey</h2>
                <p>
                    You can call me mwafy, i started my learning journey from
                    CS50 <span>(an introduction to computer)</span> by Harvard
                    university, i've learned <span>C Language</span> and how
                    computers work including algorithms and data structure, i
                    implemented a lot of big projects using C language, and also
                    i learned python and SQL database.
                </p>
                <p>
                    After That i fall in love in Front-end technology so i got{' '}
                    <span>2 Front-End nano-degrees from Udacity</span> with 5
                    main projects implemented, and i got also a lot of
                    certificates in Javascript, ES6 and React Js
                </p>
            </div>

            <div className='certificates-section animate2'>
                <h2>My Certificates</h2>
                <div className='images'>
                    <a href='./projects/certificates/6.png' target='_blank'>
                        <img
                            src='./projects/certificates/6.png'
                            alt='certificate'
                        />
                    </a>
                    <a href='./projects/certificates/1.png' target='_blank'>
                        <img
                            src='./projects/certificates/1.png'
                            alt='certificate'
                        />
                    </a>
                    <a href='./projects/certificates/2.png' target='_blank'>
                        <img
                            src='./projects/certificates/2.png'
                            alt='certificate'
                        />
                    </a>
                    <a href='./projects/certificates/3.png' target='_blank'>
                        <img
                            src='./projects/certificates/3.png'
                            alt='certificate'
                        />
                    </a>
                    <a href='./projects/certificates/4.png' target='_blank'>
                        <img
                            src='./projects/certificates/4.png'
                            alt='certificate'
                        />
                    </a>
                    <a href='./projects/certificates/5.png' target='_blank'>
                        <img
                            src='./projects/certificates/5.png'
                            alt='certificate'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
