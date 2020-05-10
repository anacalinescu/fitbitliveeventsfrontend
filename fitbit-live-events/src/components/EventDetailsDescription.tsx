import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

interface State {
  description: string;
}

export default function EventDetailsTitle({new_event}) {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    description: ''
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
    new_event[prop] = event.target.value;
  };

  return (
    <div className={classes.root}>
        <div style={{ width: '500px', position: 'relative', marginTop: '2%', left: '5%'}}>
            <TextField
            color='secondary'
            fullWidth
            id="outlined-multiline-static"
            label="Event Description"
            multiline
            rows={5}
            onChange={handleChange('description')}
            variant="outlined"
            />
        </div>
    </div>
  );
}
