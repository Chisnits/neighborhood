import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';
import swal from "sweetalert2/dist/sweetalert2.all.min.js";
import DirectoryData from './Directory/directory.json';
import './Header.css';

class Header extends Component {
    constructor(){
        super()
    
        this.state = {
            email: "",
            password: "",
            isAuthed: false,
            shouldRedirect: false
        }
    
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
    componentDidMount(){
        if(!this.state.isAuthed){
            this.props.history.push('/');
        }
    }
    handleEmail(e) {
        var emailId = document.querySelector("#email")
        if (emailId.type === 'email' && e.target.value.length !== 0){
            var email = document.querySelector("#email");
            email.classList.add("move-input-field")
            var emailInput = document.querySelector("#email-input");
            emailInput.classList.add("move-placeholder");
        }
        this.setState({
            email: e.target.value
        })
    }
    handlePassword(e) {
        var passwordId = document.querySelector("#password")
        if (passwordId.type === 'password' && e.target.value.length !== 0){
            var password = document.querySelector("#password");
            password.classList.add("move-input-field")
            var passwordInput = document.querySelector("#password-input");
            passwordInput.classList.add("move-placeholder");
        }
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
        if (_.contains(checkEmails, this.state.email)&& this.state.password === 'hr2017'){
            this.handleLogin()
        } else {
            swal(
                'Oops...',
                'Invalid login information!',
                'error'
            )
        }
        this.setState({
            email: "",
            password: ""
        })
    }
    handleLogin(){
        swal(
            'Good job!',
            'Login successful!',
            'success'
        )
        this.setState({
            isAuthed: true
        })
        var displayLinks = document.querySelector("#desktop-links");
        displayLinks.classList.add("enableLinks");
    }
    handleLogout(){
        this.setState({
            isAuthed: false,
            shouldRedirect: true
        })
        var displayHeader = document.querySelector("#desktop-links");
        displayHeader.classList.remove("enableLinks");
    }
    render() {
        const isLoggedIn = this.state.isAuthed
        return (
            <div className="header-wrapper">
                <div className="title-container">
                    <h1 className="title">Hickory Ridge</h1>
                    <h3>Draper UT, 84020</h3>
                </div>
                <div className="link-wrapper topBotomBordersOut" id="desktop-links">
                    <ul className="link-container">
                        <Link className="link" to="/"><li>Home</li></Link>
                        <Link className="link" to="/directory"><li>Directory</li></Link>
                    </ul>
                </div>
                <div className="login-wrapper">
                    <div>
                    {isLoggedIn ? 
                        <form>
                            <Link to="/"><input className="btn" type="submit" value="Logout" onClick={this.handleLogout} /> </Link>
                        </form> : 
                        <form onSubmit={this.handleSubmit}>
                            <div className="label">
                                <div className="input-container">
                                    <label className="input-label">
                                    <input id="email" className="input-field input" type="email" value={this.state.email} onChange={this.handleEmail}/>
                                        <span id="email-input" className="input-label-content">Email</span>  
                                    </label>
                                    <label className="input-label">
                                    <input id="password" className="input-field input" type="password" value={this.state.password} onChange={this.handlePassword}/>
                                        <span id="password-input" className="input-label-content">Password</span>
                                    </label>    
                                </div>
                                    <input className="home-btn btn" type="submit" />
                            </div>
                        </form>
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;