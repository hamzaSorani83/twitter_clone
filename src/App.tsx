import './App.css';
import { Left, Home, Explore, Notifications, Messages, Bookmarks,
  Lists, Profile, TweetModal, Overlay, MoreList } from './component/';

import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { selectIsDark } from './app/features/themeReducer';


function App() {
  const isDark = useAppSelector(selectIsDark);
  
  return (
    <div className={['App', isDark ? 'dark' : ''].join(" ")}>
      <div className='Layout'>
        <div className='Container'>
          <Left />
          <TweetModal />
          <Overlay />
          <MoreList />
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
