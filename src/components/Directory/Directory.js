import React, { Component } from 'react';

class Directory extends Component {
    handleCoolness(person){
        alert(`${person} is cool`);
    }
    render() {
        return (
            <div>
               Directory 
            </div>
        );
    }
}

export default Directory;