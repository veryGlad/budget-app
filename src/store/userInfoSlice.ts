import { createSlice, Slice } from '@reduxjs/toolkit';

type UserInfoSlice = {
  avatarPhoto: string;
  cardNumber: string;
  cardBalance: string;
};

const initialState: UserInfoSlice = {
  avatarPhoto:
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  cardNumber: '4444 4444 4444 4444',
  cardBalance: '7622.00',
};
export const userInfoSlice: Slice<UserInfoSlice> = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {},
});

export default userInfoSlice.reducer;
