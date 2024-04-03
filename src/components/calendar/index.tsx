import { ReactNode } from 'react';

import { CalendarContext } from './useCalendarContext';
import useCalendar from '../../hooks/useCalendar';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import Verification from './Verification';

const CalendarRoot = ({ children }: { children: ReactNode }) => {
  const calendar = useCalendar();
  return (
    <CalendarContext.Provider value={calendar}>
      {children}
    </CalendarContext.Provider>
  );
};

const Calendar = Object.assign(CalendarRoot, {
  Header: CalendarHeader,
  Body: CalendarBody,
  Footer: Verification,
});

export default Calendar;
