import React, { Component } from 'react';
import "./Gallery.css"

class Gallery extends Component {
    
    

    toggleOpen() {
      this.classList.toggle('open');
    }

    toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }


    render() {
        const panels = document.querySelectorAll('.panel');
        panels.forEach(panel => panel.addEventListener('click', this.toggleOpen));
        panels.forEach(panel => panel.addEventListener('transitionend', this.toggleActive));
        return (
            <div>
                <div className="panels">
    <div className="panel panel1">
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
            </div>
        );
    }
}

export default Gallery;