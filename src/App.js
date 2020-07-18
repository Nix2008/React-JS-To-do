import React, { Component } from 'react';
import Child from './nesting';
import AddNinja from './AddNinja'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    nest: [
      {name: "Nix", age: 20, belt: "Blue", id: 1},
      {name: "Niraj", age: 21, belt: "Green", id: 2},
      {name: "Nicks", age: 22, belt: "Yellow", id: 3}
    ]
  }
  addNinja = (par) => {
    par.id = Math.random();
    let nest = [...this.state.nest, par]
    this.setState({
      nest: nest
    })
  }
  delNinja = (id) => {
    let nest = this.state.nest.filter(par => {
      return par.id !== id 
    });
    this.setState({
      nest: nest
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello there...</p>
            <Child delNinja={this.delNinja} nest= { this.state.nest } />
            <AddNinja addNinja={this.addNinja} />
        </header>
      </div>
    );
  }
}
export default App;
