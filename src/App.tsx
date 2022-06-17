import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import AdminRoom from './pages/AdminRoom';
import Home from './pages/Home';
import NewRoom from './pages/NewRoom';
import Room from './pages/Room';
import UserAtuh from './store/UserAtuh';

function App() {
  return (
    <>
      <GlobalStyles />
      <UserAtuh>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/rooms/new' element={<NewRoom />}/>
          <Route path='/rooms/:id' element={<Room />}/>
          <Route path='/admin/rooms/:id' element={<AdminRoom />}/>
        </Routes>
      </UserAtuh>
    </>
  );
}

export default App;
