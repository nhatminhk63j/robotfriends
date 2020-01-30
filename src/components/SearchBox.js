import React, { Component } from 'react';

class SearchBox extends Component {
    render() {

        return (
            <div>
                <input 
                    className="pa3 ba b--green bg-light-blue"
                    type="search" 
                    placeholder="Search robots" 
                    onChange={this.props.searchChange}
                />
                
            </div>
        );
    }
}

export default SearchBox;