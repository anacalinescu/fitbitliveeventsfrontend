import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
  }),
);

let theme = createMuiTheme({
    palette: {
      text: {
        primary: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        secondary: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      }
    },
  });
  
  theme = responsiveFontSizes(theme);

interface State {
  title: string;
  street: string;
  number: string;
  ev_type: string;
  city: string;
}

export default function EventDetailsTitle({new_event}) {
  const classes = useStyles();
  const initialFormState = { title: '', street: '', number: '', ev_type: '', city: ''}
  const [my_event, setEvent] = React.useState(initialFormState)

  const handleChange = (prop: keyof State) => event => {
    const { name, value } = event.target
    setEvent({ ...my_event, [prop]: value });
    new_event[prop] = value
    console.log(my_event)
  };

  return (
    <div>
        <div className={classes.root}>
            <div style={{ width: '500px', left: '5%', position: 'relative'}}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Title"
                color='secondary'>Choose Title for Event</InputLabel>
                <OutlinedInput
                    color='secondary'
                    id="outlined-adornment-title"
                    value={my_event.title}
                    onChange={handleChange('title')}
                    startAdornment={<InputAdornment position="start">.</InputAdornment>}
                    labelWidth={170}
                />
                </FormControl>
            </div>
        </div>
        <div style={{ width: '500px', left: '5%', position: 'relative'}}>
            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label"
                color='secondary'>Event Type</InputLabel>
                <Select
                color='secondary'
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={my_event.ev_type}
                onChange={handleChange('ev_type')}
                label="Event Type"
                >
                    <MenuItem value={"Marathon"}>Marathon</MenuItem>
                    <MenuItem value={"Biking"}>Biking</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div style={{ width: '500px', left: '5%', position: 'relative'}}>
            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label"
                color='secondary'>City</InputLabel>
                <Select
                color='secondary'
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={my_event.city}
                onChange={handleChange('city')}
                label="City"
                >
                    <MenuItem value={"Bucharest"}>Bucharest</MenuItem>
                    <MenuItem value={"Cluj"}>Cluj</MenuItem>
                    <MenuItem value={"Iasi"}>Iasi</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div className={classes.root}>
            <div style={{ width: '500px', left: '5%', position: 'relative'}}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Title"
                color='secondary'>Street Name</InputLabel>
                <OutlinedInput
                    color='secondary'
                    id="outlined-adornment-title"
                    value={my_event.street}
                    onChange={handleChange('street')}
                    startAdornment={<InputAdornment position="start">.</InputAdornment>}
                    labelWidth={100}
                />
                </FormControl>
            </div>
        </div>
        <div className={classes.root}>
            <div style={{ width: '500px', left: '5%', position: 'relative'}}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Title"
                color='secondary'>Street Number</InputLabel>
                <OutlinedInput
                    color='secondary'
                    id="outlined-adornment-title"
                    value={my_event.number}
                    onChange={handleChange('number')}
                    startAdornment={<InputAdornment position="start">.</InputAdornment>}
                    labelWidth={110}
                />
                </FormControl>
            </div>
        </div>
    </div>
  );
}
