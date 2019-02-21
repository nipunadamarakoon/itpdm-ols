import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/common/Header/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
