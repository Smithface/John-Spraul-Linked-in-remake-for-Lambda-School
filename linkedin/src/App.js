import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainBody from './components/MainBody/MainBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="text">Ad ad ad ad, ad ad ad ad adad ad ad ad ad ad a add ad ad ad ad ad ad ad.</div>
        <MainBody />
      </div>
    );
  }
}

export default App;
