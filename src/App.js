import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav';
import Header from './Header';
class App extends Component {
    state = {};
    render() {
        return (
            <div>
                <Nav />
                <Header />
            </div>
        );
    }
}

export default App;
