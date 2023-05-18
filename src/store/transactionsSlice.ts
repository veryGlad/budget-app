import { createSlice, Slice } from '@reduxjs/toolkit';

type TransactionsSlice = {
  img: string;
  transactionName: string;
  transactionSum: string;
  paymentMethod: string;
  transactionDate: string;
};

const initialState: TransactionsSlice = {
  img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  transactionName: 'Nike Super Store',
  transactionSum: '$475',
  paymentMethod: 'Bank Account',
  transactionDate: 'Fri, 05 April 2022',
};
export const transactionsSlice: Slice<TransactionsSlice> = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {},
});

export default transactionsSlice.reducer;
