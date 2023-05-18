import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Box, Typography } from '@mui/material';

interface ITransactionListProps {
  listAvatar: string;
  name: string;
  sum: string;
  paymentMethod: string;
  date: string;
}
const TransactionsListItem: React.FC<ITransactionListProps> = ({
  listAvatar,
  name,
  sum,
  paymentMethod,
  date,
}) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={listAvatar}>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Box>
            <Typography variant={'subtitle1'}>{name}</Typography>
          </Box>
          <Box>
            <Typography variant={'caption'} color={'#A3A3A3'}>
              {paymentMethod}
            </Typography>
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <Box>
            <Typography variant={'subtitle1'} color={'#2BB272'}>
              {sum}
            </Typography>
          </Box>
          <Box>
            <Typography variant={'caption'} color={'#A3A3A3'}>
              {date}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
};

export default TransactionsListItem;
