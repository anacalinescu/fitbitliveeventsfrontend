import React from 'react';
import { Event } from "./Event";
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchFutureUserEvents } from '../actions/postsActions'


const MyAttendedFutureEvents = ({ dispatch, loading, future_user_events, hasErrors }) => {
    const username = window.localStorage.getItem('user')

    useEffect(() => { 
        if (username != null) {
            dispatch(fetchFutureUserEvents(username, 'participant'))
        } 
    }, [dispatch])

    const renderEvents = () => {
        console.log(future_user_events)
        if (loading) return <p>Loading posts...</p>    
        if (hasErrors) return <p>Unable to display posts.</p>  
        if (future_user_events.length == 0 || future_user_events == null)  return <p>No future events.</p>
        return future_user_events.map(post => <Event key={post.Id} post={post} /> )
    }

    return (
        <div>
            {renderEvents()}
        </div>
    );
}

const mapStateToProps = state => ({  
    loading: state.future_user_events.loading,  
    future_user_events: state.future_user_events.future_user_events,  
    hasErrors: state.future_user_events.hasErrors,
})

export default connect(mapStateToProps)(MyAttendedFutureEvents)