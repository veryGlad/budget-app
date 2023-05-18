import React, { JSX } from 'react';
import { Box, Typography } from '@mui/material';

interface ISectionProps {
  title: string;
  rightElement?: JSX.Element;
  children?: React.ReactNode;
}
const Section: React.FC<ISectionProps> = ({
  title,
  rightElement,
  children,
}) => {
  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'32px'}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'360px'}
        margin={'24px auto'}
      >
        <Typography variant={'h5'}>{title}</Typography>
        {rightElement}
      </Box>
      {children}
    </Box>
  );
};

export default Section;
