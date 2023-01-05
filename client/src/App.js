import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './pages/Main';

const App = () => {
  return (
    <Router>
      <Main/>
    </Router>
  )
}

export default App;