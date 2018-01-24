import React, { Component } from 'react';
import './App.css';
import Board from '../board/Board';
// import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Board />
      </div>
    );
  }
}

export default App;
