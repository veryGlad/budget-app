import { Box, styled } from '@mui/material';

export const WeekCalendarWrapper = styled(Box)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  width: 360px;
  height: 160px;
  background: #fafafa;
  border-radius: 21px;
  margin: 10px auto;

  .row {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .col {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-start {
    justify-content: flex-start;
    text-align: left;
  }

  .col-center {
    justify-content: center;
    text-align: center;
  }

  .col-end {
    justify-content: flex-end;
    text-align: right;
  }

  .header {
    padding-top: 20px;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .days {
    text-transform: uppercase;
    font-weight: 400;
    color: #615c5c;
    margin-top: 19px;
    margin-bottom: 14px;
  }

  .cell {
    height: 57px;
    width: 39px;
    font-size: 16px;
    margin: 0 7px;
    display: flex;
    justify-content: center;
  }

  .today {
    background: #ff643b;
    border-radius: 8px;
    color: #fff;
  }

  .number {
    font-size: 16px;
    margin-top: 12px;
  }

  .selected {
    background: #8234f8;
    border-radius: 8px;
    color: #fff;
  }
`;
