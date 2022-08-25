import React from 'react';
import './App.css';
import {Home} from './component/';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App ">
      <div className='Layout'>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
