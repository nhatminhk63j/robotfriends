import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shdow-5">
                <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt="robo"/>
                <div>
                    <h2> {this.props.name} </h2>
                    <p> {this.props.email} </p>
                </div>
            </div>
        );
    }
}

export default Card;