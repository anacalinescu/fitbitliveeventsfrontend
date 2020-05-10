import React, { useState } from 'react';
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
import LoginComponent from './LoginComponent'
import RegisterForm from './RegisterComponent'
import { connect } from 'react-redux'
import { loginUser } from '../actions/postsActions'
import { createUser } from '../actions/postsActions'



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

const Login = ({ dispatch, loading, posts, hasErrors }) => {
  const classes = useStyles();

  const usersData = []

  const [users, setUsers] = useState(usersData)

  const checkUser = user => {
    dispatch(loginUser(user))
  }

  return (
    <Grid container>
      <Grid
          container
          alignItems="center"
          style={{ position: 'absolute', width: '80%', height: '100%', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)' }}
      >
        <Grid
            container
            style={{ width: '450px', height: '450px', background: 'white',
                borderRadius: '15px', left: '50%', transform: 'translate(-50%, 0%)',
                position: 'relative' }}
        >
          <Typography variant="h3" component="h3" style={{ color: '#9e9e9e',
          left: '50%', transform: 'translate(-50%, 0%)', position: 'absolute', top: '10%'}}>
            Login
          </Typography>
          <LoginComponent checkUser={checkUser}/>
      </Grid>
    </Grid>
  </Grid>
  );
}

const mapStateToProps = state => ({  
  loading: state.posts.loading,  
  posts: state.posts.posts,  
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(Login)
