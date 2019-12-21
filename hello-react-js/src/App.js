import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import WelcomeClassComponent from './components/WelcomeClassComponent'
import User from './components/User'
import UserClass from './components/UserClass'
import MessageStateComponent from './components/MessageStateComponent'
import Counter from './components/Counter'
import DestructureFunComp from './components/DestructueFunComp'
import DestructueClassComp from './components/DestructureClassComp'
import DestructureClassComp from './components/DestructureClassComp';
import EventHandlingFunComp from './components/EventHandlingFunComp'

function App() {
  return (
    <div className="App">
      {/* <Greet/> 
      <Welcome/> */}
      {/* <WelcomeClassComponent/> */}
      {/* <User name="Rohit" age="15"/>
      <User name="Singh" age="13"/>
      <User name="XYZ"/> */}
      {/* <UserClass name="Rohit"/>
      <UserClass name="Singh"/>
      <UserClass name="XYZ"/> */}
      {/* <MessageStateComponent/> */}
      {/* <Counter/> */}
      {/* <DestructureFunComp name="Rohit" age="17" uid="1012"/>
      <DestructureFunComp name="Singh" age="21" uid="1014"/> */}
      {/* <DestructureClassComp name="Jon" age='233'/> */}
      <EventHandlingFunComp/>
    </div>
  );
}

export default App;
