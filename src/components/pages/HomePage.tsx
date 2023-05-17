import React from 'react';
import Header from '../Header';
import { Box } from '@mui/material';
import CreditCardBlock from '../CreditCardBlock';
import FolderList from "../ui/ListItem";

const HomePage = () => {
  return (
    <div>
      <Header header={'Home'} />
      <Box display={'flex'} justifyContent={'center'}>
        <CreditCardBlock />
      </Box>
        <Box display={"flex"} justifyContent={"center"} width={'100%'} marginTop={3}>
        <FolderList/>
        </Box>
    </div>
  );
};

export default HomePage;
