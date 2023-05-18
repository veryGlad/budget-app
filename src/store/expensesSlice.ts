import { createSlice, Slice } from '@reduxjs/toolkit';

type ExpensesSliceState = {
  expenses: IExpense[];
};

const initialState: ExpensesSliceState = {
  expenses: [
    {
      expenseAvatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      expenseName: 'Nike Super Store',
      expensePaymentMethod: 'Bank Account',
      expenseDate: 'Fri, 5 April 2022',
      totalSpend: '$2,486',
      totalBudget: '$3,000',
      spendPercentage: 75.78,
    },
  ],
};
export const expensesSlice: Slice<ExpensesSliceState> = createSlice({
  name: 'expensesSlice',
  initialState: initialState,
  reducers: {},
});

export interface IExpense {
  expenseAvatar: string;
  expenseName: string;
  expensePaymentMethod: string;
  expenseDate: string;
  totalSpend: string;
  totalBudget: string;
  spendPercentage: number;
}

export default expensesSlice.reducer;
