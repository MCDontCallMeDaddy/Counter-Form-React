import React, { Component } from 'react';
import Counter from './components//Counter/Counter';
import Form from './components/Form/Form';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Form />
      </div>
    );
  }
}

export default App;
