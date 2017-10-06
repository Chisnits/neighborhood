import React, { Component } from "react";
import "./Styles/Home.css"

class Home extends Component {
  constructor(){
    super();

    this.state = {
      condition1: false,
      condition2: false,
      condition3: false,
      condition4: false,
      condition5: false
    }
    this.togglePanel1 = this.togglePanel1.bind(this)
    this.togglePanel2 = this.togglePanel2.bind(this)
    this.togglePanel3 = this.togglePanel3.bind(this)
    this.togglePanel4 = this.togglePanel4.bind(this)
    this.togglePanel5 = this.togglePanel5.bind(this)
  }
  togglePanel1(){
    this.setState({
      condition1: !this.state.condition1
    })
    }
  togglePanel2(){
    this.setState({
      condition2: !this.state.condition2
    })
    }
  togglePanel3(){
    this.setState({
      condition3: !this.state.condition3
    })
    }
  togglePanel4(){
    this.setState({
      condition4: !this.state.condition4
    })
    }
  togglePanel5(){
    this.setState({
      condition5: !this.state.condition5
    })
    }

  render() {
    return (
      <div className="home-wrapper">
          <div className="panels">
                <div className={this.state.condition1 ? "animated-1" : "panel1"} onClick={this.togglePanel1}></div>
                <div className={this.state.condition2 ? "animated-2" : "panel2"} onClick={this.togglePanel2}></div>
                <div className={this.state.condition3 ? "animated-3" : "panel3"} onClick={this.togglePanel3}></div>
                <div className={this.state.condition4 ? "animated-4" : "panel4"} onClick={this.togglePanel4}></div>
                <div className={this.state.condition5 ? "animated-5" : "panel5"} onClick={this.togglePanel5}></div>
              </div>
      </div>
    );
  }
}




export default Home;
