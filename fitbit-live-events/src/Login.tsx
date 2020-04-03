import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      top: theme.spacing(3),
      margin: theme.spacing(1),
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    },
  }),
);

export default function InputWithIcon() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        style={{ minHeight: '50vh', width: '25%', position: 'absolute', background: 'white',
         left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
         borderRadius: '15px' }}
      >
      <div style={{position: 'absolute', top: '20%'}}> 
      <Typography variant="h3" component="h3" style={{ color: '#9e9e9e'}}>
        Login
      </Typography>
      </div>

      <div style={{position: 'absolute', top: '40%'}}>
      <TextField
        className={classes.root}
        id="input-with-icon-textfield"
        label="Usernem"
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      </div>

      <div style={{position: 'absolute', top: '55%'}}>
      <TextField
        className={classes.root}
        id="input-with-icon-textfield"
        label="Password"
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
      </div>

      <div style={{position: 'absolute', top: '70%', left: '20%'}}>
      <FormControlLabel
      label='Remember me!'
      control={<Checkbox
        style={{color: '#e91e63'}}
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />}/>
      </div>

      <div style={{position: 'absolute', top: '75%'}}>
      <Button className={classes.margin}
       style={{maxWidth: '270px', maxHeight: '50px',
       minWidth: '270px', minHeight: '50px',
       background: '#e91e63', color: 'white'}}>
        Login
      </Button>
      </div>
      </Grid>
    </div>
  );
}
