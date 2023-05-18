import { createSlice, Slice } from '@reduxjs/toolkit';

export interface IMonthlyAnalytics {
  month: string;
  sum: string;
}

export type MonthlyAnalyticsSlice = {
  data: IMonthlyAnalytics[];
};

const initialState: MonthlyAnalyticsSlice = {
  data: [
    { month: 'Jan', sum: '$1,234' },
    { month: 'Feb', sum: '$2,234' },
    { month: 'Mar', sum: '$5,234' },
    { month: 'Apr', sum: '$2,234' },
    { month: 'May', sum: '$1,000' },
    { month: 'Jun', sum: '$2,900' },
    { month: 'Jul', sum: '$3,900' },
  ],
};
export const userInfoSlice: Slice<MonthlyAnalyticsSlice> = createSlice({
  name: 'monthlyAnalytics',
  initialState: initialState,
  reducers: {},
});

export default userInfoSlice.reducer;
