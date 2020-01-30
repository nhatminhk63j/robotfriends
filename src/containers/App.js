import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return ( <
            div className = "tc" >
            <
            h1 className = "f2" > RoboFriends < /h1>

            <
            SearchBox searchChange = { this.onSearchChange }
            />

            <
            Scroll >
            <
            CardList robots = { filteredRobots }
            /> < /
            Scroll > <
            /div>
        );
    }
}

export default App;