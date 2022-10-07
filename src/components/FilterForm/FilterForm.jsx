import DatePicker /* , { registerLocale } */ from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';

import calendarIcon from '../../images/calendar-icon.svg';

import { CalendarContainer, Container, Title, CalendarStyles } from './FilterForm.styled';

export default function FilterForm() {
  const [date, setDate] = useState(false);
  const [dateNext, setDateNext] = useState(false);
  return (
    <Container>
      <Title>Фильтры</Title>
      <CalendarContainer>
        <CalendarStyles>
          <DatePicker
            locale="uk"
            dateFormat="dd.MM.yyyy"
            selected={date}
            onChange={setDate}
            maxDate={new Date()}
            className={'calendar'}
            placeholderText={'C'}
          />
          <img src={calendarIcon} className="calendarIcon" alt="React Logo" />
        </CalendarStyles>
        <CalendarStyles>
          <DatePicker
            locale="uk"
            dateFormat="dd.MM.yyyy"
            selected={dateNext}
            onChange={setDateNext}
            minDate={date}
            className={'calendar'}
            placeholderText={'По'}
          />
          <img src={calendarIcon} className="calendarIcon" alt="React Logo" />
        </CalendarStyles>
      </CalendarContainer>
    </Container>
  );
}
