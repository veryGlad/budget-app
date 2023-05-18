import React, { useState } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  addWeeks,
  subWeeks,
} from 'date-fns';
import {
  KeyboardArrowRightRounded,
  KeyboardArrowLeftRounded,
} from '@mui/icons-material';
import { WeekCalendarWrapper } from './weekCalendar.styles';

enum ChangeWeekEventEnum {
  Prev = 'PREV',
  Next = 'NEXT',
}

const WeekCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeWeekHandle = (btnType: ChangeWeekEventEnum) => {
    if (btnType === ChangeWeekEventEnum.Prev) {
      setCurrentMonth(subWeeks(currentMonth, 1));
    }
    if (btnType === ChangeWeekEventEnum.Next) {
      setCurrentMonth(addWeeks(currentMonth, 1));
    }
  };

  const onDateClickHandle = (day: Date) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = 'MMM yyyy';
    return (
      <div className='header row flex-middle'>
        <div
          className='col col-start'
          onClick={() => changeWeekHandle(ChangeWeekEventEnum.Prev)}
        >
          <KeyboardArrowLeftRounded />
        </div>
        <div className='col col-center'>
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div
          className='col col-end'
          onClick={() => changeWeekHandle(ChangeWeekEventEnum.Next)}
        >
          <KeyboardArrowRightRounded />
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = 'EEEEE';
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className='col col-center' key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className='days row'>{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = 'd';
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              isSameDay(day, new Date())
                ? 'today'
                : isSameDay(day, selectedDate)
                ? 'selected'
                : ''
            }`}
            key={day.getDay()}
            onClick={() => {
              onDateClickHandle(cloneDay);
            }}
          >
            <span className='number'>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className='row' key={day.getDay()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className='body'>{rows}</div>;
  };

  return (
    <WeekCalendarWrapper>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </WeekCalendarWrapper>
  );
};

export default WeekCalendar;
