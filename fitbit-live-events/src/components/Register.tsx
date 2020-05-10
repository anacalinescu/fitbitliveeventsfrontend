import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RegisterForm from './RegisterComponent'
import { connect } from 'react-redux'
import { createUser } from '../actions/postsActions'
import { useEffect } from 'react'



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

const Register = ({ dispatch, loading, posts, hasErrors }) => {
  const classes = useStyles();

  const usersData = []

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    dispatch(createUser(user))
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
            style={{ width: '450px', height: '650px', background: 'white',
                borderRadius: '15px', left: '50%', transform: 'translate(-50%, 0%)',
                position: 'relative' }}
        >
          <Typography variant="h3" component="h3" style={{ color: '#9e9e9e',
            left: '50%', transform: 'translate(-50%, 0%)', position: 'absolute', top: '10%'}}>
            Register
          </Typography>
          <RegisterForm addUser={addUser}/>
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

export default connect(mapStateToProps)(Register)
