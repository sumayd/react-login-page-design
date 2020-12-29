import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />   
        <DropdownMenu />
        <Login />
        <Footer/>  
      </div>
    );
  }
}
export default App;