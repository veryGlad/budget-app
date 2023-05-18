import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
  expensesData: ITransactions[];
};

const initialState = {
  transactionDate: [
    {
      expenseAvatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      expensesName: 'Nike Super Store',
      expensePaymentMethod: 'Bank Account',
      expenseDate: 'Fri, 5 April 2022',
      totalSpend: '$2,486',
      totalBudget: '$3,000',
      spendPercentage: 75.78,
    },
  ],
};
export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: initialState,
  reducers: {},
});

export interface ITransactions {
  expensesName: string;
  expensePaymentMethod: string;
  expenseDate: string;
  totalSpend: string;
  totalBudget: string;
  spendPercentage: number;
}

export default expensesSlice.reducer;
