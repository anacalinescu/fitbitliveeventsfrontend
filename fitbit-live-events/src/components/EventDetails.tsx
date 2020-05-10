import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import EventDetailsTitle from './EventDetailsTitle';
import EventDetailsDescription from './EventDetailsDescription';

const month_to_number ={
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
}


export default function EventDetails({new_event}) {
    const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(
        new Date('2020-05-01T21:11:54'),
    );

    const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(
        new Date('2020-05-01T21:11:54'),
    );

    
    const handleDateChange = (date: Date | null) => {
        setSelectedStartDate(date);
        new_event['date'] = String(date).substring(11, 15).concat("-").concat(
            month_to_number[String(date).substring(4, 7)]).concat("-").concat(String(date).substring(8, 10));
    };

    const handleStartTimeChange = (date: Date | null) => {
        setSelectedStartDate(date);
        new_event['start_time'] = String(date).substring(16, 21);
    };

    const handleEndTimeChange = (date: Date | null) => {
        setSelectedEndDate(date);
        new_event['end_time'] = String(date).substring(16, 21);
    };

    return (
        <div>
            <EventDetailsTitle new_event={new_event} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                    color='secondary'
                    margin="normal"
                    id="date-picker-dialog"
                    label="Choose Date"
                    format="MM/dd/yyyy"
                    value={selectedStartDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    <KeyboardTimePicker
                    color='secondary'
                    margin="normal"
                    id="time-picker"
                    label="Choose Start Time"
                    value={selectedStartDate}
                    onChange={handleStartTimeChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    />
                    <KeyboardTimePicker
                    color='secondary'
                    margin="normal"
                    id="time-picker"
                    label="Choose End Time"
                    value={selectedEndDate}
                    onChange={handleEndTimeChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <EventDetailsDescription new_event={new_event} />
        </div>
    );
}