import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

interface IHeaderProps {
  header: string;
}
const Header: React.FC<IHeaderProps> = ({ header }) => {
  return (
    <Box
      height={'90px'}
      width={'100%'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box height={'43px'} width={'43px'} marginLeft={'20px'}>
        <Avatar variant='rounded' sx={{ bgcolor: '#9B63FC' }} />
      </Box>
      <Typography>{header}</Typography>
      <Box
        marginRight={'20px'}
        width={'43px'}
        display={'flex'}
        justifyContent={'flex-end'}
      >
        <NotificationsOutlinedIcon />
      </Box>
    </Box>
  );
};

export default Header;
