import React from 'react';
import CreditCard from './ui/CreditCard';
import { Box } from '@mui/material';

const CreditCardBlock = () => {
  return (
    <div>
      <Box display={'flex'} justifyContent={'center'}></Box>

      <Box position={'relative'} marginTop={'34px'}>
        <Box
          width={'285px'}
          height={'134px'}
          bgcolor={'#9A63FB'}
          borderRadius={'24px'}
          position={'absolute'}
          zIndex={-1}
          left={'37px'}
          top={'-34px'}
        ></Box>
        <CreditCard />
      </Box>
    </div>
  );
};

export default CreditCardBlock;
