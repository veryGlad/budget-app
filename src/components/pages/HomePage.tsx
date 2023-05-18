import React from 'react';
import Header from '../Header';
import { Box } from '@mui/material';
import CreditCardSection from '../CreditCard/CreditCardSection';
import Section from '../Section';
import TransactionItem from '../Transactions/TransactionsListItem';
import TransactionsList from '../Transactions/TransactionsList';
import AnalyticsChart from '../ExpensesChart/AnalyticsChart';

const HomePage = () => {
  return (
    <Box>
      <Header
        header={'Home'}
        avatarPhoto={
          'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
        }
      />
      <Box display={'flex'} justifyContent={'center'}>
        <CreditCardSection />
      </Box>
      <Box display={'flex'} justifyContent={'center'} width={'100%'}></Box>
      <Section title={'Analytics'}>
        <AnalyticsChart />
      </Section>
      <Section title={'Transactions'}>
        <TransactionsList />
      </Section>
    </Box>
  );
};

export default HomePage;
