import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';



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

export default function Register() {
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
        style={{ minHeight: '70vh', width: '25%', position: 'absolute', background: 'white',
         left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
         borderRadius: '15px' }}
      >
      <div style={{position: 'absolute', top: '7%'}}> 
      <Typography variant="h3" component="h3" style={{ color: '#9e9e9e'}}>
        Register
      </Typography>
      </div>

      <div style={{position: 'absolute', top: '20%'}}>
      <TextField
        className={classes.root}
        id="input-with-icon-textfield"
        label="Full name"
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      </div>

      <div style={{position: 'absolute', top: '30%'}}>
      <TextField
        className={classes.root}
        id="input-with-icon-textfield"
        label="Email address"
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      </div>

      <div style={{position: 'absolute', top: '40%'}}>
      <TextField
        className={classes.root}
        id="input-with-icon-textfield"
        label="Mobile number"
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneAndroidIcon />
            </InputAdornment>
          ),
        }}
      />
      </div>

      <div style={{position: 'absolute', top: '50%'}}>
      <TextField
        className={classes.root}
        id="input-with-icon-textfield"
        label="Username"
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

      <div style={{position: 'absolute', top: '60%'}}>
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

      <div style={{position: 'absolute', top: '70%'}}>
      <TextField
        className={classes.root}
        id="input-with-icon-textfield"
        label="Repeat password"
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

      <div style={{position: 'absolute', top: '85%'}}>
      <Button className={classes.margin}
       style={{maxWidth: '270px', maxHeight: '50px',
       minWidth: '270px', minHeight: '50px',
       background: '#e91e63', color: 'white'}}>
        Register
      </Button>
      </div>
      </Grid>
    </div>
  );
}
