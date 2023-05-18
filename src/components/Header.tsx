import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

interface IHeaderProps {
  header: string;
  avatarPhoto: string;
}
const Header: React.FC<IHeaderProps> = ({ header, avatarPhoto }) => {
  return (
    <Box
      height={'90px'}
      width={'360px'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      margin={'0 auto'}
    >
      <Box height={'43px'} width={'43px'}>
        <Avatar
          variant='rounded'
          sx={{ bgcolor: '#9B63FC' }}
          src={avatarPhoto}
        />
      </Box>
      <Typography variant={'h6'}>{header}</Typography>
      <Box width={'43px'} display={'flex'} justifyContent={'flex-end'}>
        <NotificationsOutlinedIcon />
      </Box>
    </Box>
  );
};

export default Header;
