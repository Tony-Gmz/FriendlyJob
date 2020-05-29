import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import frLocale from 'date-fns/locale/fr';
import { fr } from 'date-fns/locale';

const Calendar = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider locale={frLocale} utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Choisissez une date"
          format="dd/MM/yyyy"
          type="datetime-fr"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          DateTimeFormat={Intl.DateTimeFormat}
          locale="fr"
        />
        <KeyboardTimePicker
          locale={frLocale}
          ampm={false}
          margin="normal"
          id="time-picker"
          label="Choisissez une heure"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default Calendar;
