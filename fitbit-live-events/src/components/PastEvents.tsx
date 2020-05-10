import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Event } from "./Event";
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPastEvents } from '../actions/postsActions'

const PastEvents = ({ dispatch, loading, past_posts, hasErrors }) => {  
    useEffect(() => {  
        dispatch(fetchPastEvents())
    }, [dispatch])

    const renderEvents = () => {
        if (loading) return <p>Loading posts...</p>    
        if (hasErrors) return <p>Unable to display posts.</p>    
        return past_posts.map(post => <Event key={post.Id} post={post} /> )
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
    loading: state.past_posts.loading,  
    past_posts: state.past_posts.past_posts,  
    hasErrors: state.past_posts.hasErrors,
})

export default connect(mapStateToProps)(PastEvents)
