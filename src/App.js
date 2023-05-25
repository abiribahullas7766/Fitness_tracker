import React from 'react';
import './App.css';
import Header from './components/Header';
import StepCounter from './components/StepCounter';
import ActivityLog from './components/ActivityLog';


function App() {
  return (
    <div className="App">
      <Header />
      <StepCounter />
      <ActivityLog />
    </div>
  );
}

export default App;
