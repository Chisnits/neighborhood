import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper" style={headerDivStyle}>
                <ul style={headerUlStyle}>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/directory"><li>Directory</li></Link>
                    <Link to="/calender"><li>Calender</li></Link>
                </ul>
            </div>
        );
    }
}

const headerDivStyle = {
    display: "flex",
    justifyContent: "flex-end",
    height: "7vh",
    marginRight: "140px"
}
const headerUlStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "20vw",
    listStyleType: "none"
}


export default Header;