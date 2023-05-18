import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ExpensesPage from './components/pages/ExpensesPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={'/home'} element={<HomePage />} />
          <Route path={'/expenses'} element={<ExpensesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
