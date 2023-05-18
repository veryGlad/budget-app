import { createSlice, Slice } from '@reduxjs/toolkit';

export interface IMonthlyAnalytics {
  month: string;
  value: number;
  isSelected?: boolean;
}

export type MonthlyAnalyticsSlice = {
  data: IMonthlyAnalytics[];
};

const initialState: MonthlyAnalyticsSlice = {
  data: [
    { month: 'Jan', value: 1_234 },
    { month: 'Feb', value: 2_234 },
    { month: 'Mar', value: 5_234, isSelected: true },
    { month: 'Apr', value: 2_234 },
    { month: 'May', value: 1_000 },
    { month: 'Jun', value: 2_900 },
    { month: 'Jul', value: 3_900 },
  ],
};
export const monthlyAnalyticsSlice: Slice<MonthlyAnalyticsSlice> = createSlice({
  name: 'monthlyAnalyticsSlice',
  initialState: initialState,
  reducers: {},
});

export default monthlyAnalyticsSlice.reducer;
