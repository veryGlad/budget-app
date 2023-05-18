import React from 'react';
import CreditCard from './CreditCard';
import { Box } from '@mui/material';
import { useAppSelector } from '../../store/store';

const CreditCardSection: React.FC = () => {
  const { cardInfo } = useAppSelector((state) => ({
    cardInfo: state.userInfoSlice.card,
  }));

  return (
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
      <CreditCard
        totalBalance={cardInfo.cardBalance}
        cardNumber={cardInfo.cardNumber}
      />
    </Box>
  );
};

export default CreditCardSection;
