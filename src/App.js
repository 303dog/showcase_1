import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dasboard';
import Login from './Components/Login';
import Preferences from './Components/Preferences';
import Upload from './Components/Upload';

function App() {
  const [token, setToken] = useState();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <header className="App-header">
      <BrowserRouter>
        <Routes>      
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
          <Route path='/preferences'>
            <Preferences/>
          </Route>
          <Route path='/upload'>
            <Upload/>
          </Route>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
