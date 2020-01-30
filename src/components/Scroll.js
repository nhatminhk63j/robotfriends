import React, { Component } from 'react';

class Scroll extends Component {
    render() {
        return (
            <div style={{overflowY: 'scroll', height: '600px', border: '5px solid black', width: '100%'}} >
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;