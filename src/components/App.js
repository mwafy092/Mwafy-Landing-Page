import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
    state = {};

    render() {
        return (
            <div className='app'>
                <Router>
                    <Nav />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
