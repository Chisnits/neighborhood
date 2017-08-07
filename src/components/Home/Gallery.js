import React, { Component } from 'react';
import "./Styles/Gallery.css"

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false,
    };
    // this.toggleOpen = this.toggleOpen.bind(this);
  }
    
    render() {
       
const panels = document.querySelectorAll('.panel');

console.log(this.state);

    function toggleOpen() {
      // console.log('hello')
      // console.log(e.target.className);
      // this.classList.toggle('open');
       const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    // function toggleActive(e) {
    //   console.log(e.propertyName);
    //   if (e.propertyName.includes('flex')) {
    //     this.classList.toggle('open-active');
    //   }
    // }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    // panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

        return (
            
          <div className="panels">
            <div className="this.state.active ? 'panel panel1 panel.open' || panel panel1" onClick={ toggleOpen } >
              <p>Hey</p>
              <p>Let's</p>
              <p>Dance</p>
            </div>
            <div className="panel panel2">
              <p>Give</p>
              <p>Take</p>
              <p>Receive</p>
            </div>
            <div className="panel panel3">
              <p>Experience</p>
              <p>It</p>
              <p>Today</p>
            </div>
            <div className="panel panel4">
              <p>Give</p>
              <p>All</p>
              <p>You can</p>
            </div>
            <div className="panel panel5">
              <p>Life</p>
              <p>In</p>
              <p>Motion</p>
            </div>
        </div>
            
        );
    }
}

export default Gallery;