import React from 'react';
import { Box, Button, styled } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link, NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  :visited {
    color: #a3a3a3;
  }

  &.active {
    color: #ff643b;
  }
`;

const Footer = () => {
  return (
    <Box
      position={'absolute'}
      left={0}
      bottom={0}
      height={'90px'}
      width={'100%'}
      boxShadow={'0px 0px 4px rgba(0, 0, 0, 0.09)'}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'100%'}
        marginRight={'28px'}
        marginLeft={'25px'}
      >
        <StyledLink to={'/home'}>
          <HomeRoundedIcon />
        </StyledLink>
        <StyledLink to={'/expenses'}>
          <CreditCardOutlinedIcon />
        </StyledLink>
        <StyledLink to={'/'}>
          <AddCircleRoundedIcon fontSize={'large'} />
        </StyledLink>
        <StyledLink to={'/'}>
          <CalendarMonthOutlinedIcon />
        </StyledLink>
        <StyledLink to={'/'}>
          <SettingsOutlinedIcon />
        </StyledLink>
      </Box>
    </Box>
  );
};

export default Footer;
