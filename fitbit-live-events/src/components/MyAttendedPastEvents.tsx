import React from 'react';
import { Event } from "./Event";
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPastUserEvents } from '../actions/postsActions'


const MyAttendedPastEvents = ({ dispatch, loading, past_user_events, hasErrors }) => {
    const username = window.localStorage.getItem('user')

    useEffect(() => { 
        if (username != null) {
            dispatch(fetchPastUserEvents(username, 'participant'))
        } 
    }, [dispatch])

    const renderEvents = () => {
        if (loading) return <p>Loading posts...</p>    
        if (hasErrors) return <p>Unable to display posts.</p>  
        if (past_user_events == null)  return <p>No past events.</p>
        return past_user_events.map(post => <Event key={post.Id} post={post} /> )
    }

    return (
        <div>
            {renderEvents()}
        </div>
    );
}

const mapStateToProps = state => ({  
    loading: state.past_user_events.loading,  
    past_user_events: state.past_user_events.past_user_events,  
    hasErrors: state.past_user_events.hasErrors,
})

export default connect(mapStateToProps)(MyAttendedPastEvents)