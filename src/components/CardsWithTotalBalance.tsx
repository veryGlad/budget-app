import React from 'react';
import { Box } from '@mui/material';
import TotalBalanceCard, {
  TotalBalanceCardVariantsEnum,
} from './ui/TotalBalanceCard';
import { useAppSelector } from '../store/store';

const CardsWithTotalBalance = () => {
  const { bankAccounts } = useAppSelector((state) => ({
    bankAccounts: state.userInfoSlice.bankAccounts,
  }));

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      marginTop={'32px'}
      width={'360px'}
      margin={'0 auto'}
    >
      {bankAccounts.map((card, index) => (
        <TotalBalanceCard
          totalBalance={card.cardBalance}
          cardNumber={card.cardNumber}
          variant={
            index === 0
              ? TotalBalanceCardVariantsEnum.PRIMARY
              : TotalBalanceCardVariantsEnum.SECONDARY
          }
        />
      ))}
    </Box>
  );
};

export default CardsWithTotalBalance;
