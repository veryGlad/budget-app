import { createSlice, Slice } from '@reduxjs/toolkit';

interface ICard {
  avatarPhoto?: string;
  cardNumber: string;
  cardBalance: string;
}

type UserInfoSlice = {
  card: ICard;
  bankAccounts: ICard[];
};

const initialState: UserInfoSlice = {
  card: {
    cardNumber: '4444 4444 4444 4444',
    cardBalance: '7622.00',
  },
  bankAccounts: [
    {
      avatarPhoto:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      cardNumber: '4444 4444 4444 4356',
      cardBalance: '7622.00',
    },
    {
      avatarPhoto:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      cardNumber: '4444 4444 4444 4444',
      cardBalance: '3722.00',
    },
  ],
};
export const userInfoSlice: Slice<UserInfoSlice> = createSlice({
  name: 'userInfoSlice',
  initialState: initialState,
  reducers: {},
});

export default userInfoSlice.reducer;
