import React, { Component } from 'react';
import "./Styles/Login.css"

class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <h1>
                    Hickory Ridge
                </h1>
                <form>
                    <label>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password"/>
                        <input type="submit" />
                    </label>
                </form>
            </div>
        );
    }
}

export default Login;