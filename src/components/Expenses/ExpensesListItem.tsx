import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';
import ProgressBar from '../ui/ProgressBar';

interface IExpensesListItemProps {
  listAvatar: string;
  name: string;
  paymentMethod: string;
  date: string;
  totalSpend: string;
  totalBudget: string;
  spendPercentage: number;
}
const ExpensesListItem: React.FC<IExpensesListItemProps> = ({
  listAvatar,
  name,
  paymentMethod,
  date,
  totalSpend,
  totalBudget,
  spendPercentage,
}) => {
  return (
    <ListItem>
      <Box display={'flex'} flexDirection={'column'} width={'100%'}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
          width={'100%'}
        >
          <Box display={'flex'} alignItems={'flex-start'}>
            <ListItemAvatar>
              <Avatar src={listAvatar} />
            </ListItemAvatar>
            <Box display={'flex'} flexDirection={'column'} marginTop={'-5px'}>
              <Typography variant={'subtitle1'}>{name}</Typography>
              <Typography variant={'caption'} color={'#A3A3A3'}>
                {paymentMethod}
              </Typography>
            </Box>
          </Box>
          <Typography variant={'caption'} color={'#A3A3A3'}>
            {date}
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} marginTop={'12px'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                marginRight={'24px'}
              >
                <Typography variant={'subtitle1'} color={'#615C5C'}>
                  Total spend
                </Typography>
                <Typography
                  variant={'subtitle1'}
                  color={'#2BB272'}
                  marginTop={'8px'}
                >
                  {totalSpend}
                </Typography>
              </Box>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant={'subtitle1'} color={'#615C5C'}>
                  Total Budget
                </Typography>
                <Typography variant={'subtitle1'} marginTop={'8px'}>
                  {totalBudget}
                </Typography>
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'flex-end'}
            >
              <Typography variant={'subtitle1'} color={'#2BB272'}>
                {spendPercentage}%
              </Typography>
            </Box>
          </Box>
          <Box>
            <ProgressBar value={spendPercentage} />
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
};

export default ExpensesListItem;
