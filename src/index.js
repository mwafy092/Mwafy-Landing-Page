import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
