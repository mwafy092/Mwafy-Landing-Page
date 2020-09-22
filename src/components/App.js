import React, { Component } from 'react';
import '../styles/App.scss';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Works from './Works';
import Contact from './Contact';
class App extends Component {
    state = {};
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <About />
                <Works />
                <Contact />
            </div>
        );
    }
}

export default App;
