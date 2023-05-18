import * as React from 'react';
import List from '@mui/material/List';
import { Box } from '@mui/material';
import TransactionItem from './TransactionsListItem';
import { useAppSelector } from '../../store/store';

const TransactionsList: React.FC = () => {
  const { transactions } = useAppSelector((state) => ({
    transactions: state.transactionsSlice.transactions,
  }));

  return (
    <Box marginBottom={'16px'}>
      <List sx={{ width: 360, bgcolor: '#FAFAFA', borderRadius: '10px' }}>
        {transactions.map((transaction) => (
          <TransactionItem
            listAvatar={transaction.img}
            name={transaction.transactionName}
            sum={transaction.transactionSum}
            paymentMethod={transaction.paymentMethod}
            date={transaction.transactionDate}
          />
        ))}
      </List>
    </Box>
  );
};

export default TransactionsList;
