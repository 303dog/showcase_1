
import React from'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dasboard';
import Login from './Components/Login';
import Preferences from './Components/Preferences';
import Upload from './Components/Upload';
import CreateUser from './Components/CreateUser';
import CounterWrapper from './Components/CounterWrapper';
function App() {
 
  return (
    <main className="wrapper">
      <h1>App.js</h1>
      <CounterWrapper
    render={({ count, increment, decrement }) => (
      <div>
        <h1>Render Props Counter Example</h1>
        <div>
          <p>{count}</p>
          <button type="button" onClick={() => increment()}>
            Increment
          </button>
          <button type="button" onClick={() => decrement()}>
            Decrement
          </button>
        </div>
      </div>
    )}
  />

      <CreateUser />
      {/*<Login/>
      <Dashboard/>
      <Preferences/>
      <Upload/>*/}
    </main>
  );
}

export default App;
