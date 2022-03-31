
import React from'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dasboard';
import Login from './Components/Login';
import Preferences from './Components/Preferences';
import Upload from './Components/Upload';
import CreateUser from './Components/CreateUser';


function App() {
 
  return (
    <main className="wrapper">
      <h1>App.js</h1>
    
      <Dashboard/>

      <CreateUser />
      {/*<Login/>
      <Preferences/>
      <Upload/>*/}
    </main>
  );
}

export default App;
