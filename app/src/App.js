import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Component1 />
      <Component2 />
      <Component3 />
      </div>
    );
  }
}
class Component1 extends Component {
  render() {
    return (
      <div className="App">
      <h1>First Component</h1>
      </div>
    );
  }
}
class Component2 extends Component {
  render() {
    return (
      <div className="App">
      <h1>Second Component</h1>
      </div>
    );
  }
}
class Component3 extends Component {
  render() {
    return (
      <div className="App">
      <h1>Third Component</h1>
      </div>
    );
  }
}

export default App;
