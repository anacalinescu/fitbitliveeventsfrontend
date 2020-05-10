import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
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

const LoginForm = props => {
    const classes = useStyles();
    const initialFormState = { username: '', password: '' }
    const [user, setUser] = useState(initialFormState)
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
  
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
            console.log(user)
            if (!user.password || !user.username) return
    
            console.log("ereere")
            props.checkUser(user)
            setUser(initialFormState)
            }}
            >
                <TextField
                    className={classes.root}
                    name="username"
                    label="Username"
                    variant="filled"
                    onChange={handleInputChange}
                    style={{position: 'absolute', top: '30%', left: '50%',
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
                    style={{position: 'absolute', top: '45%', left: '50%',
                    transform: 'translate(-50%, 0%)'}}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <FormControlLabel
                label='Remember me!'
                style={{position: 'absolute', top: '70%', left: '50%',
                    transform: 'translate(-50%, 0%)'}}
                control={<Checkbox
                    style={{color: '#e91e63',}}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />}/>

                <Button className={classes.margin}
                    type='submit'
                    style={{maxWidth: '270px', maxHeight: '50px',
                    minWidth: '270px', minHeight: '50px',
                    background: '#e91e63', color: 'white',
                    position: 'absolute', top: '80%', left: '50%',
                    transform: 'translate(-50%, 0%)'}}>
                    Login
                </Button>
            </form>
        </Grid>

    );
}

export default LoginForm;