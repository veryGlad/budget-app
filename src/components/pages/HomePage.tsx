import React from 'react';
import Header from '../Header';
import { Box } from '@mui/material';
import CreditCardBlock from '../ui/CreditCardBlock';

const HomePage = () => {
  return (
    <div>
      <Header header={'Home'} />
      <Box display={'flex'} justifyContent={'center'}>
        <CreditCardBlock />
      </Box>
    </div>
  );
};

export default HomePage;
