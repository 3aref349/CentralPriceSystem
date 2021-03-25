import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color:black;
`;



export default function AppDatePrice() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
<form method="get" action="/Price">
<MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Title>
      <h2> Application Date & time </h2>
      </Title>
              
      <Grid container justify="space-around">
     
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
<a href="http://www.stackoverflow.com/">
    <button>Click me</button>
</a>
      </Grid>
    </MuiPickersUtilsProvider>
</form>
  
  );
}
