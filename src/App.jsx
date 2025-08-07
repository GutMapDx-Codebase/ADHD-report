import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Report from './report';
function App() {
  return (
    <div className="App">
      
    

      <Router>
        <Routes>
          <Route path="/" element={  <>  <Report />   </>   } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
