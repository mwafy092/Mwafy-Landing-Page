import React from 'react';
import Header from './Header';
import AboutBlock from './AboutBlock';
import ProjectsBlock from './ProjectsBlock';
import Contact from './Footer';
function Home() {
    return (
        <div>
            <Header />
            <AboutBlock />
            <ProjectsBlock />
            <Contact />
        </div>
    );
}

export default Home;
