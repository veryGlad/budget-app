import React from 'react';
import { Box, Typography } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const CreditCard = () => {
  return (
    <Box
      height={'141px'}
      width={'302px'}
      bgcolor={'#2F3046'}
      borderRadius={'24px'}
      paddingLeft={'29px'}
      paddingRight={'29px'}
      paddingTop={'23px'}
      paddingBottom={'23px'}
      display={'flex'}
      justifyContent={'space-between'}
    >
      <Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          height={'100%'}
        >
          <Box>
            <Typography color={'#fff'} variant={'h6'}>
              Total Balance
            </Typography>
            <Typography color={'#fff'} variant={'h4'}>
              $7622.00
            </Typography>
          </Box>
          <Typography variant={'h6'} color={'#A3A3A3'}>
            4444 4444 4444 4444
          </Typography>
        </Box>
      </Box>
      <Box color={'#fff'}>
        <MoreHorizOutlinedIcon />
      </Box>
    </Box>
  );
};

export default CreditCard;
