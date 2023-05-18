import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ExpensesPage from './components/pages/ExpensesPage';
import { Box } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Box paddingBottom={'90px'}>
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/expenses'} element={<ExpensesPage />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
