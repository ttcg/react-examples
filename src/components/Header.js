import React from 'react';
import logo from './../logo.svg';
import './App.css';
import pkg from '../../package.json';

const Header = () => {
    return (        
        <div className="App">        
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Todo</h1>
                <small style={{float: 'right'}}>{pkg.version}</small>
            </header>
            <hr />
        </div>        
    )        
}

export default Header;