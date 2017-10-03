import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper" id="header">
                <ul className="header-container">
                    <Link className="link" to="/"><li>Home</li></Link>
                    <Link className="link" to="/directory"><li>Directory</li></Link>
                    <Link className="link" to="/calender"><li>Calender</li></Link>
                </ul>
            </div>
        );
    }
}

export default Header;