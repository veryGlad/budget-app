import React from 'react';
import Header from '../Header';
import { Box } from '@mui/material';
import CardsWithTotalBalance from '../CardsWithTotalBalance';
import Section from '../Section';
import WeekCalendar from '../WeekCalendar/WeekCalendar';
import ViewAll from '../ui/ViewAll';
import ExpensesList from '../Expenses/ExpensesList';

const ExpensesPage = () => {
  return (
    <Box>
      <Header
        header={'Expenses'}
        avatarPhoto={
          'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
        }
      />

      <WeekCalendar />
      <CardsWithTotalBalance />
      <Section title={'Expenses'} rightElement={<ViewAll />}>
        <ExpensesList />
      </Section>
    </Box>
  );
};

export default ExpensesPage;
