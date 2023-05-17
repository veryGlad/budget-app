import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header header={'Home'} />
        <Routes>
          <Route path={'/'} element={<div />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
