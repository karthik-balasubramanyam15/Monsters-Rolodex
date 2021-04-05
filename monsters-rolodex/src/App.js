import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((value) => {
            return <h1 key={value.id}>{value.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
