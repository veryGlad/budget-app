import React from 'react';
import { Box, Button } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigator = useNavigate();
  const navigateToPage = (url: string) => {
    navigator(url);
  };
  return (
    <Box
      position={'absolute'}
      left={0}
      bottom={0}
      height={'90px'}
      width={'100%'}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'100%'}
        marginRight={'28px'}
        marginLeft={'25px'}
      >
        <Link to={'/home'}>
          <HomeRoundedIcon />
        </Link>
        <Link to={'/expenses'}>
          <CreditCardOutlinedIcon />
        </Link>
        <Link to={'/home'}>
          <AddCircleRoundedIcon fontSize={'large'} />
        </Link>
        <Link to={'/home'}>
          <CalendarMonthOutlinedIcon />
        </Link>
        <Link to={'/home'}>
          <SettingsOutlinedIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
