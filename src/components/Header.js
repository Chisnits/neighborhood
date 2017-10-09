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
                <div className="link-wrapper" id="desktop-links">
                    <ul className="link-container">
                        <Link className="link" to="/"><li>Home</li></Link>
                        <Link className="link" to="/directory"><li>Directory</li></Link>
                        <Link className="link" to="/calender"><li>Calender</li></Link>
                    </ul>
                </div>
                <div className="title-container">
                    <h1 className="title">Hickory Ridge</h1>
                    <h3>Draper UT, 84020</h3>
                </div>
                <div className="login-wrapper">
                    <div>
                    {isLoggedIn ? 
                        <form>
                            <Link to="/"><input type="submit" value="Logout" onClick={this.handleLogout} /> </Link>
                        </form> : 
                        <form onSubmit={this.handleSubmit}>
                            <label className="label">
                                <input className="input-field" type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                                <input className="input-field" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
                                <input type="submit" />
                            </label>
                        </form>
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;