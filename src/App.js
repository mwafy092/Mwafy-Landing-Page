import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav';
import Header from './Header';
import About from './About';
class App extends Component {
    state = {};
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <About />
            </div>
        );
    }
}

export default App;
