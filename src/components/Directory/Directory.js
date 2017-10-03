import React, { Component } from 'react';
import directoryData from './directory.json';

import './styles/Directory.css'

class Directory extends Component {
    constructor(){
        super();

        this.state = {
            search: ""
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
        this.setState({
            search: e.target.value
        })
    }
    render() {
        const filteredDirectory = directoryData.filter(item => {
            const query = this.state.search.toLowerCase();
          
            return (
              item.firstName1.toLowerCase().indexOf(query) >= 0 ||
              item.firstName2.toLowerCase().indexOf(query) >= 0 ||
              item.lastName.toLowerCase().indexOf(query) >= 0 || 
              item.address.toLowerCase().indexOf(query) >= 0 ||
              item.email.toLowerCase().indexOf(query) >= 0 ||
              item.email2.toLowerCase().indexOf(query) >= 0 ||
              item.phone.toLowerCase().indexOf(query) >= 0
              
            )
          });
        const data = filteredDirectory.map((item,i) => (
            <div key={i} className="directory-wrapper">
                <h1>{item.firstName1}</h1>
                <h1>{item.firstName2 ? item.firstName2 : null}</h1>
                <h1>{item.lastName}</h1>
                <h1>{item.address}</h1>
                <h1>{item.email}</h1>
                <h1>{item.email2 ? item.email2 : null}</h1>
                <h1>{item.phone}</h1>
            </div>
        ))
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Search: <input className="input" type="input" value={this.state.search} onChange={this.handleSearch}/>
                </form>
                <div>
                    {data}
                </div>
            </div>
        );
    }
}

export default Directory;