import React from 'react';
import '../App.css'
import '../css/Nav-Bar.css'
import logo from '../logo.svg';
class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return <div className="header-container">
            <img src={logo} className="App-logo" alt="logo"></img>
            <span>陌上花开，可缓缓归矣。</span>
        </div>
    }
}


export default Navbar