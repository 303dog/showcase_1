import React from 'react';
import './Login.css'

export default function Login() {
  return(
    <div className="login-wrapper">
    <h1>Hello [name], Please Log In</h1>
    <form>
      <label>
        <p>Admin-username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}