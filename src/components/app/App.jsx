import React, { Component } from 'react';
import './App.css';
import Board from '../board/Board';
// import { connect } from 'react-redux';

class App extends Component {
  render() {
    // console.log(this.props.items);
    return (
      <div className="App">
        
        <Board />
      </div>
    );
  }
}

export default App;


// const mapStateToProps = (store) => (
//   {
//       items: store.gridReducer.items,
//   });

// export default connect(mapStateToProps)(App);