import { createSlice, Slice } from '@reduxjs/toolkit';

interface ITransaction {
  img: string;
  transactionName: string;
  transactionSum: string;
  paymentMethod: string;
  transactionDate: string;
}

type TransactionsSlice = {
  transactions: ITransaction[];
};

const initialState: TransactionsSlice = {
  transactions: [
    {
      img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      transactionName: 'Nike Super Store',
      transactionSum: '$475',
      paymentMethod: 'Bank Account',
      transactionDate: 'Fri, 05 April 2022',
    },
  ],
};
export const transactionsSlice: Slice<TransactionsSlice> = createSlice({
  name: 'transactionsSlice',
  initialState: initialState,
  reducers: {},
});

export default transactionsSlice.reducer;
