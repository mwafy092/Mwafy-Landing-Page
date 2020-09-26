import React from 'react';
import Header from './Header';
import AboutBlock from './AboutBlock';
import ProjectsBlock from './ProjectsBlock';
import Footer from './Footer';
function Home() {
    return (
        <div>
            <Header />
            <AboutBlock />
            <ProjectsBlock />
            <Footer />
        </div>
    );
}

export default Home;
