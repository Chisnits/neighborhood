import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div style={{...Styles.wrapper, ...Styles.disableHeader}} id="header">
                <ul style={Styles.container}>
                    <Link style={Styles.link} to="/"><li>Home</li></Link>
                    <Link style={Styles.link} to="/directory"><li>Directory</li></Link>
                    <Link style={Styles.link} to="/calender"><li>Calender</li></Link>
                </ul>
            </div>
        );
    }
}

const Styles = {
        wrapper: {
            display: "flex",
            justifyContent: "flex-end",
            height: "7vh",
            marginRight: "140px",
            display: "none"
        },
        container: {
            display: "flex",
            justifyContent: "space-between",
            width: "20vw",
            listStyleType: "none"
        },
        link: {
            textDecoration: "none",
            color: "black"
        },
        enableHeader: {
            display: "block"
        }
}


export default Header;