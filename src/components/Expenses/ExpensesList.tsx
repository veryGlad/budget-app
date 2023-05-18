import * as React from 'react';
import List from '@mui/material/List';
import { Box } from '@mui/material';
import { useAppSelector } from '../../store/store';
import ExpensesListItem from './ExpensesListItem';

const ExpensesList: React.FC = () => {
  const { expenses } = useAppSelector((state) => ({
    expenses: state.expensesSlice.expenses,
  }));

  return (
    <Box>
      <List sx={{ width: 360, bgcolor: '#FAFAFA', borderRadius: '10px' }}>
        {expenses.map((expense) => (
          <ExpensesListItem
            listAvatar={expense.expenseAvatar}
            name={expense.expenseName}
            paymentMethod={expense.expensePaymentMethod}
            date={expense.expenseDate}
            totalSpend={expense.totalSpend}
            totalBudget={expense.totalBudget}
            spendPercentage={expense.spendPercentage}
          />
        ))}
      </List>
    </Box>
  );
};

export default ExpensesList;
