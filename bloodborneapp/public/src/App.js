import React from 'react';
import './App.css';
import WeaponList from './components/WeaponList';
import BossList from './components/BossList';
import HomePage from './components/HomePage';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/HomePage" element={<HomePage />} />
            <Route path="/WeaponList" element={<WeaponList />} />
            <Route path="/BossList" element={<BossList />} />
            <Route render={() => <h1>Page not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;