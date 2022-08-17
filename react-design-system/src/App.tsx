import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import './App.css'

const App = ({ name }) => (
  <BrowserRouter>
    <header>
      <h1>{name}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react-single">Single</Link>
          </li>
          <li>
            <Link to="/react-form">Form</Link>
          </li>
          <li>
            <Link to="/react-lazy">Lazy</Link>
          </li>
          <li>
            <Link to="/react-multiples">Multiples</Link>
          </li>
        </ul>
      </nav>
    </header>
  </BrowserRouter>
)

export default App