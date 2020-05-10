import React, { useState } from 'react';
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


const RegisterForm = props => {
    const classes = useStyles();
    const initialFormState = { name: '', email: '', mobile: '',username: '', password: '' }
    const [user, setUser] = useState(initialFormState)
  
    const handleInputChange = event => {
      const { name, value } = event.target
    
      setUser({ ...user, [name]: value })
    }

    return (
        <Grid
        container
        alignItems="center">
            <form
            onSubmit={event => {
            event.preventDefault()
            if (!user.name || !user.username) return
    
            props.addUser(user)
            setUser(initialFormState)
            }}
            >
                <TextField
                className={classes.root}
                name="name"
                label="Full name"
                variant="filled"
                onChange={handleInputChange}
                style={{position: 'absolute', top: '20%', left: '50%',
                transform: 'translate(-50%, 0%)'}}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <PersonIcon />
                    </InputAdornment>
                    ),
                }}
                />

                <TextField
                className={classes.root}
                name="email"
                label="Email address"
                variant="filled"
                onChange={handleInputChange}
                style={{position: 'absolute', top: '30%', left: '50%',
                transform: 'translate(-50%, 0%)'}}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <EmailIcon />
                    </InputAdornment>
                    ),
                }}
                />

                <TextField
                className={classes.root}
                name="mobile"
                label="Mobile number"
                variant="filled"
                onChange={handleInputChange}
                style={{position: 'absolute', top: '40%', left: '50%',
                transform: 'translate(-50%, 0%)'}}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <PhoneAndroidIcon />
                    </InputAdornment>
                    ),
                }}
                />

                <TextField
                className={classes.root}
                name="username"
                label="Username"
                variant="filled"
                onChange={handleInputChange}
                style={{position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, 0%)'}}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                    ),
                }}
                />

                <TextField
                className={classes.root}
                name="password"
                label="Password"
                variant="filled"
                onChange={handleInputChange}
                style={{position: 'absolute', top: '60%', left: '50%',
                transform: 'translate(-50%, 0%)'}}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <LockIcon />
                    </InputAdornment>
                    ),
                }}
                />
                <Button className={classes.margin}
                    type='submit'
                    style={{maxWidth: '270px', maxHeight: '50px',
                    minWidth: '270px', minHeight: '50px',
                    background: '#e91e63', color: 'white',
                    position: 'absolute', top: '85%', left: '50%',
                    transform: 'translate(-50%, 0%)'}}>
                    Join Fitbit Live Events
                </Button>
            </form>
        </Grid>
    );
}

export default RegisterForm;