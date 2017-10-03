import React, { Component } from 'react';
import _ from 'underscore'
import "./Styles/Login.css"

import DirectoryData from '../Directory/directory.json'

class Login extends Component {
    constructor(){
        super()

        this.state = {
            email: "",
            password: "",
            isAuthed: false
        }

        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit(e){
        let checkEmails = []
        e.preventDefault();
        DirectoryData.map(item => {
            checkEmails.push(item.email)
            checkEmails.push(item.email2)
        })
        if (_.contains(checkEmails, this.state.email)&& this.state.password === 'hickoryRidge'){
            this.handleLogin()
        } else {
            alert("Invalid login Information")
        }
        this.setState({
            email: "",
            password: ""
        })
    }
    handleLogin(){
        this.setState({
            isAuthed: true
        })
        // var displayHeader = document.querySelector("#header");
        // displayHeader.classList.add("enableHeader");
        // document.getElementById("header").className = "display: 'block'";
    }
    render() {
        console.log(this.state.isAuthed)
        return (
            <div className="login-wrapper">
                <h1>
                    Hickory Ridge
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
                        <input type="submit" />
                    </label>
                </form>
            </div>
        );
    }
}

export default Login;