import React from 'react';
import { Box, Typography } from '@mui/material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

export enum TotalBalanceCardVariantsEnum {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

interface ITotalBalanceCardProps {
  variant?: TotalBalanceCardVariantsEnum;
  totalBalance: string;
  cardNumber: string;
}
const TotalBalanceCard: React.FC<ITotalBalanceCardProps> = ({
  totalBalance,
  cardNumber,
  variant = TotalBalanceCardVariantsEnum.PRIMARY,
}) => {
  return (
    <Box
      height={'170px'}
      width={'170px'}
      bgcolor={
        variant === TotalBalanceCardVariantsEnum.PRIMARY ? '#8234f8' : '#FF643B'
      }
      borderRadius={'6px'}
      position={'relative'}
    >
      <Box display={'flex'} flexDirection={'column'}>
        <Typography
          color={'#fff'}
          fontWeight={'bolder'}
          marginTop={'23px'}
          marginLeft={'22px'}
        >
          Total Balance
        </Typography>
        <Typography
          color={'#fff'}
          variant={'h5'}
          fontWeight={'bold'}
          marginTop={'8px'}
          marginLeft={'22px'}
        >
          ${totalBalance}
        </Typography>
      </Box>
      <Box
        height={'55px'}
        width={'100%'}
        position={'absolute'}
        left={0}
        bottom={0}
        bgcolor={'#FAFAFA'}
        borderRadius={'10px 10px 0px 0px'}
        color={
          variant === TotalBalanceCardVariantsEnum.PRIMARY
            ? 'rgba(122, 77, 190, 0.5)'
            : 'rgba(203, 82, 50, 0.5)'
        }
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <CreditCardOutlinedIcon fontSize={'large'} />
        <Box marginLeft={'10px'}>
          <Typography color={'#000'} variant={'subtitle2'} marginTop={'8px'}>
            Bank Account
          </Typography>
          <Typography variant={'caption'} color={'#A3A3A3'}>
            **** **** {cardNumber.slice(cardNumber.length - 4)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TotalBalanceCard;
