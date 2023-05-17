import React from 'react';
import Header from '../Header';
import { Box } from '@mui/material';
import CreditCardBlock from '../CreditCardBlock';
import FolderList from '../ui/ListItem';
import TotalBalanceCard from '../ui/TotalBalanceCard';

const HomePage = () => {
  return (
    <div>
      <Header header={'Home'} />
      <Box display={'flex'} justifyContent={'center'}>
        <CreditCardBlock />
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        width={'100%'}
        marginTop={3}
      >
        <FolderList />
      </Box>
      <Box margin={'27px'}>
        <TotalBalanceCard />
      </Box>
    </div>
  );
};

export default HomePage;
