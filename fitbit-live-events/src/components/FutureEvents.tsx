import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Event } from "./Event";
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchFutureEvents } from '../actions/postsActions'

const FutureEvents = ({ dispatch, loading, future_posts, hasErrors }) => {  
    useEffect(() => {  
        dispatch(fetchFutureEvents())
    }, [dispatch])

    const renderEvents = () => {
        console.log(future_posts)
        if (loading) return <p>Loading posts...</p>    
        if (hasErrors) return <p>Unable to display posts.</p>   
        if (future_posts == [] || future_posts == null)  return <p>No future events.</p>
        return future_posts.map(post => <Event key={post.Id} post={post} /> )
    }

  return (
    <Grid container>
        <Typography variant="h2" component="h2" align="center" style={{ color: 'white', left: '50%', 
            transform: 'translate(-50%, 0%)', position: 'absolute', top: '10%'}}>
        Past events
        </Typography>
        <div style={{position: 'absolute', width: '80%', height: '10%', left: '10%', top: '22%'}}>
            <hr></hr>
        </div>
        <Grid
            container
            style={{ position: 'absolute', width: '80%', height: '400px', left: '10%', top: '25%' }}
        >
            {renderEvents()}
        </Grid>
    </Grid>
  )
}

const mapStateToProps = state => ({  
    loading: state.future_posts.loading,  
    future_posts: state.future_posts.future_posts,  
    hasErrors: state.future_posts.hasErrors,
})

export default connect(mapStateToProps)(FutureEvents)
