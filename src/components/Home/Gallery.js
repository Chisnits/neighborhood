import React, { Component } from 'react';
import "./Styles/Gallery.css"

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen(e) {
    console.log(e.target.className)
    console.log(e.propertyName)
    if(e.target.className === 'panel panel1' || 'open'){
      this.refs.panel1.classList.toggle('open')
    }
    if(e.target.className === 'panel panel2'){
      this.refs.panel2.classList.toggle('open')
    }
    if(e.target.className === 'panel panel3'){
      this.refs.panel3.classList.toggle('open')
    }
    if(e.target.className === 'panel panel4'){
      this.refs.panel4.classList.toggle('open')
    }
    if(e.target.className === 'panel panel5'){
      this.refs.panel5.classList.toggle('open')
    }
  }
    render() {
       
const panels = document.querySelectorAll('.panel');

    // function toggleActive(e) {
    //   console.log(e.propertyName);
    //   if (e.propertyName.includes('flex')) {
    //     this.classList.toggle('open-active');
    //   }
    // }
        return (
            
          <div className="panels">
            <div ref="panel1" className="panel panel1" onClick={ this.toggleOpen } >
              <p>Hey</p>
              <p>Let's</p>
              <p>Dance</p>
            </div>
            <div ref="panel2" className="panel panel2" onClick={ this.toggleOpen }>
              <p>Give</p>
              <p>Take</p>
              <p>Receive</p>
            </div>
            <div ref="panel3" className="panel panel3" onClick={ this.toggleOpen }>
              <p>Experience</p>
              <p>It</p>
              <p>Today</p>
            </div>
            <div ref="panel4" className="panel panel4" onClick={ this.toggleOpen }>
              <p>Give</p>
              <p>All</p>
              <p>You can</p>
            </div>
            <div ref="panel5" className="panel panel5" onClick={ this.toggleOpen }>
              <p>Life</p>
              <p>In</p>
              <p>Motion</p>
            </div>
        </div>
            
        );
    }
}

export default Gallery;