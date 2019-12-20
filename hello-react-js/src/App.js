import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import WelcomeClassComponent from './components/WelcomeClassComponent'

function App() {
  return (
    <div className="App">
      {/* <Greet/> 
      <Welcome/> */}
      <WelcomeClassComponent/>
    </div>
  );
}

export default App;
