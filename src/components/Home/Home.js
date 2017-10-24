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
    this.togglePanel = this.togglePanel.bind(this)
  }
  togglePanel(e){
    if(e.currentTarget.id === "panel1"){
      this.setState({
        condition1: !this.state.condition1
      })
    }
    if(e.currentTarget.id === "panel2"){
      this.setState({
        condition2: !this.state.condition2
      })
    }
    if(e.currentTarget.id === "panel3"){
      this.setState({
        condition3: !this.state.condition3
      })
    }
    if(e.currentTarget.id === "panel4"){
      this.setState({
        condition4: !this.state.condition4
      })
    }
    if(e.currentTarget.id === "panel5"){
      this.setState({
        condition5: !this.state.condition5
      })
    }
    }
  render() {
    return (
      <div className="home-wrapper">
          <div className="panels">
                <div id="panel1" className={this.state.condition1 ? "animated-1" : "panel1"} onClick={this.togglePanel}></div>
                <div id="panel2" className={this.state.condition2 ? "animated-2" : "panel2"} onClick={this.togglePanel}></div>
                <div id="panel3" className={this.state.condition3 ? "animated-3" : "panel3"} onClick={this.togglePanel}></div>
                <div id="panel4" className={this.state.condition4 ? "animated-4" : "panel4"} onClick={this.togglePanel}></div>
                <div id="panel5" className={this.state.condition5 ? "animated-5" : "panel5"} onClick={this.togglePanel}></div>
              </div>
      </div>
    );
  }
}




export default Home;
