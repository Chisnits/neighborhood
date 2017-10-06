import React, { Component } from 'react';
import DirectoryData from './directory.json';
import _ from 'lodash';

import './styles/Directory.css'

class Directory extends Component {
    constructor(){
        super();

        this.state = {
            search: ""
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSearch(e){
        this.setState({
            search: e.target.value
        })
    }
    handleClick(e){
        var inputs = document.getElementsByClassName("directory-wrapper");
        for (var i = 0; i < inputs.length; i++) {
          if(e.currentTarget.id === inputs[i].id){
            var expander = document.querySelector("#"+ inputs[i].id);
            expander.classList.toggle("directory-expand");
          }
        }
    }
    render() {
        const filteredDirectory = DirectoryData.filter(item => {
            const query = this.state.search.toLowerCase();
          
            return (
              item.firstName1.toLowerCase().indexOf(query) >= 0 ||
              item.firstName2.toLowerCase().indexOf(query) >= 0 ||
              item.lastName.toLowerCase().indexOf(query) >= 0 ||
              item.address.toLowerCase().indexOf(query) >= 0 ||
              item.email.toLowerCase().indexOf(query) >= 0 ||
              item.email2.toLowerCase().indexOf(query) >= 0 ||
              item.phone.toLowerCase().indexOf(query) >= 0 ||
              item.phone2.toLowerCase().indexOf(query) >= 0
              
            )
          });
        const data = filteredDirectory.map((item,i) => (
            <div key={i} className="directory-wrapper" id={_.uniqueId("card")} onClick={this.handleClick}>
                <h1>{item.lastName}</h1>
                <h1>{item.firstName1}</h1>
                <h1>{item.firstName2 ? item.firstName2 : null}</h1>
                <h1>{item.lastName2 ? item.lastName2 : null}</h1>
                <h1>{item.address}</h1>
                <h1>{item.email}</h1>
                <h1>{item.email2 ? item.email2 : null}</h1>
                <h1>{item.phone}</h1>
                <h1>{item.phone2 ? item.phone2 : null}</h1>
            </div>
        ))
        return (
            <div>
                <form className="form-container" onSubmit={this.handleSubmit}>
                    Search: <input className="input" type="input" value={this.state.search} onChange={this.handleSearch}/>
                </form>
                <div className="card-container">
                    {data}
                </div>
            </div>
        );
    }
}

export default Directory;