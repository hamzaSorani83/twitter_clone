import React from 'react';
import './App.css';
import { Left, Home, Explore, Notifications, Messages, Bookmarks, Lists, Profile } from './component/';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App ">
      <div className='Layout'>
        <div className='Container'>
          <Left />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Explore' element={<Explore/>} />
            <Route path='/Notifications' element={<Notifications/>} />
            <Route path='/Messages' element={<Messages/>} />
            <Route path='/Bookmarks' element={<Bookmarks/>} />
            <Route path='/Lists' element={<Lists/>} />
            <Route path='/Profile' element={<Profile/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
