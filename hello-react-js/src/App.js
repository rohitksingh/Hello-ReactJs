import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import WelcomeClassComponent from './components/WelcomeClassComponent'
import User from './components/User'
import UserClass from './components/UserClass'

function App() {
  return (
    <div className="App">
      {/* <Greet/> 
      <Welcome/> */}
      {/* <WelcomeClassComponent/> */}
      {/* <User name="Rohit" age="15"/>
      <User name="Singh" age="13"/>
      <User name="XYZ"/> */}
      <UserClass name="Rohit"/>
      <UserClass name="Singh"/>
      <UserClass name="XYZ"/>
    </div>
  );
}

export default App;
