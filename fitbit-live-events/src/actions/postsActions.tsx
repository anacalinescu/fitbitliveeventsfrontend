// Create Redux action types
export const GET_EVENTS = 'GET EVENTS'
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS'
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE'
export const GET_FUTURE_POSTS = 'GET FUTURE POSTS'
export const GET_FUTURE_POSTS_SUCCESS = 'GET_FUTURE_POSTS_SUCCESS'
export const GET_FUTURE_POSTS_FAILURE = 'GET_FUTURE_POSTS_FAILURE'
export const GET_PAST_POSTS = 'GET PAST POSTS'
export const GET_PAST_POSTS_SUCCESS = 'GET_PAST_POSTS_SUCCESS'
export const GET_PAST_POSTS_FAILURE = 'GET_PAST_POSTS_FAILURE'
export const GET_PAST_USER_EVENTS = 'GET PAST USER_EVENTS'
export const GET_PAST_USER_EVENTS_SUCCESS = 'GET_PAST_USER_EVENTS_SUCCESS'
export const GET_PAST_USER_EVENTS_FAILURE = 'GET_PAST_USER_EVENTS_FAILURE'
export const GET_FUTURE_USER_EVENTS = 'GET FUTURE USER_EVENTS'
export const GET_FUTURE_USER_EVENTS_SUCCESS = 'GET_FUTURE_USER_EVENTS_SUCCESS'
export const GET_FUTURE_USER_EVENTS_FAILURE = 'GET_FUTURE_USER_EVENTS_FAILURE'
export const GET_FETCHPS = 'GET_FECH_PARTICIPANT_SUMMARY'
export const GET_FETCHPS_SUCCESS = 'GET_FECH_PARTICIPANT_SUMMARY_SUCCESS'
export const GET_FETCHPS_FAILURE = 'GET_FECH_PARTICIPANT_SUMMARY_FAILURE'
export const CREATE_EVENT = 'CREATE EVENT'
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCES'
export const CREATE_EVENT_FAILURE = 'CREATE_EVENT_FAILURE'

// Create Redux action creators that return an action
export const getPosts = () => ({
    type: GET_EVENTS,
})
  
export const getPostsSuccess = posts => ({
    type: GET_EVENTS_SUCCESS,
    payload: posts,
})

export const getPostsFailure = () => ({
    type: GET_EVENTS_FAILURE,
})

export const getFuturePosts = () => ({
    type: GET_FUTURE_POSTS,
})
  
export const getFuturePostsSuccess = future_posts => ({
    type: GET_FUTURE_POSTS_SUCCESS,
    payload: future_posts,
})

export const getFuturePostsFailure = () => ({
    type: GET_FUTURE_POSTS_FAILURE,
})

export const getPastPosts = () => ({
    type: GET_PAST_POSTS,
})
  
export const getPastPostsSuccess = past_posts => ({
    type: GET_PAST_POSTS_SUCCESS,
    payload: past_posts,
})

export const getPastPostsFailure = () => ({
    type: GET_PAST_POSTS_FAILURE,
})

export const getFethParticipantSummary = () => ({
    type: GET_FETCHPS,
})

export const fetchParticipantSummarySuccess = info => ({
    type: GET_FETCHPS_SUCCESS,
    payload: info,
})

export const fetchParticipantSummaryFailure = () => ({
    type: GET_FETCHPS_FAILURE,
})

export const getPastUserEvents = () => ({
    type: GET_PAST_USER_EVENTS,
})
  
export const getPastUserEventsSuccess = past_user_events => ({
    type: GET_PAST_USER_EVENTS_SUCCESS,
    payload: past_user_events,
})

export const getPastUserEventsFailure = () => ({
    type: GET_PAST_USER_EVENTS_FAILURE,
})

export const getFutureUserEvents = () => ({
    type: GET_FUTURE_USER_EVENTS,
})
  
export const getFutureUserEventsSuccess = future_user_events => ({
    type: GET_FUTURE_USER_EVENTS_SUCCESS,
    payload: future_user_events,
})

export const getFutureUserEventsFailure = () => ({
    type: GET_FUTURE_USER_EVENTS_FAILURE,
})

export const createEventDispatch = () => ({
    type: CREATE_EVENT,
})

export const createEventFailure = () => ({
    type: CREATE_EVENT_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchEvents() {
    console.log('Fetch')
    return async dispatch => {
      dispatch(getPosts())
  
        try {
            const response = await fetch('http://localhost:8080/listEvents')
            const data = await response.json()
            dispatch(getPostsSuccess(data))
        } catch (error) {
            dispatch(getPostsFailure())
        }
    }
}

export function fetchPastEvents() {
    console.log('Fetch')
    return async dispatch => {
      dispatch(getPastPosts())
  
        try {
            const response = await fetch('http://localhost:8080/listPastEvents')
            const data = await response.json()
            dispatch(getPastPostsSuccess(data))
        } catch (error) {
            dispatch(getPastPostsFailure())
        }
    }
}

export function fetchFutureEvents() {
    console.log('Fetch')
    return async dispatch => {
      dispatch(getFuturePosts())
  
        try {
            const response = await fetch('http://localhost:8080/listFutureEvents')
            const data = await response.json()
            dispatch(getFuturePostsSuccess(data))
        } catch (error) {
            dispatch(getFuturePostsFailure())
        }
    }
}

export function fetchPastUserEvents(username, role) {
    return async dispatch => {
      dispatch(getPastUserEvents())
  
        try {
            const response = await fetch('http://localhost:8080/fetchUserPastEvents?' +
                                        'username=' + username + '&role=' + role)
            const data = await response.json()
            dispatch(getPastUserEventsSuccess(data))
        } catch (error) {
            dispatch(getPastUserEventsFailure())
        }
    }
}

export function fetchFutureUserEvents(username, role) {
    return async dispatch => {
      dispatch(getFutureUserEvents())
  
        try {
            const response = await fetch('http://localhost:8080/fetchUserFutureEvents?' +
                                        'username=' + username + '&role=' + role)
            const data = await response.json()
            dispatch(getFutureUserEventsSuccess(data))
        } catch (error) {
            dispatch(getFutureUserEventsFailure())
        }
    }
}

export function fetchParticipantSummary(username) {
    return async dispatch => {
      dispatch(getFethParticipantSummary())
  
        try {
            const response_part = await fetch('http://localhost:8080/fetchParticipantSummary?'
                                        + 'username=' + username)
            const response_org = await fetch('http://localhost:8080/listAllEvents?'
                                        + 'username=' + username + '&role=organizer')
            const data_part = await response_part.json()
            const data_org = await response_org.json()
            console.log(data_part.length)
            const events_attended = data_part.length
            const events_organized = data_org.length
            var ranked = 0;
            data_part.forEach( (element) => {
                console.log(element)
                if (element['Ranked'] == 1) {
                    ranked = ranked + 1;
                }
            });
            dispatch(fetchParticipantSummarySuccess({'attended': events_attended, 'organized': events_organized, 'ranked': ranked}))
        } catch (error) {
            dispatch(fetchParticipantSummaryFailure())
        }
    }
}

export function loginUser(user) {
    console.log(user)
    return async dispatch => {
      dispatch(getPosts())
  
        try {
            const response = await fetch('http://localhost:8080/findUser'
                                        + '?username=' + user['username']
                                        + '&password=' + user['password'])
            response.text().then(function (text) {
                const data = text
                //dispatch(getPostsSuccess(data))
                console.log(data)
                if (data == "Succes") {
                    localStorage.setItem("user", user['username'])
                    window.location.href = "http://localhost:3000";
                } else {
                    window.location.href = "http://localhost:3000/login";
                }
            });
        } catch (error) {
            dispatch(getPostsFailure())
        }
    }
}

export function createUser(user) {
    console.log(user)
    return async dispatch => {
      dispatch(getPosts())
  
        try {
            const response = await fetch('http://127.0.0.1:8080/createUser?'
                                            + '&name=' + user['name'] + '&email=' + user['email']
                                            + '&mobile=' + user['mobile'] + '&username=' + user['username']
                                            + '&password=' + user['password'],
                                            {method: 'post'})

            
            response.text().then(function (text) {
                const data = text
                //dispatch(getPostsSuccess(data))
                console.log(data)
                window.localStorage.setItem('user', user['username'])
                if (data == "Succes") {
                    window.location.href = "http://localhost:3000/account";
                } else {
                    window.location.href = "http://localhost:3000/register";
                }
            });
        } catch (error) {
            console.log(error)
            dispatch(getPostsFailure())
        }
    }
}

export function createEvent(event) {
    console.log(event)
    const id = Math.floor(Math.random() * 10000) + 1  
    return async dispatch => {
      dispatch(createEventDispatch())
  
        try {
            const response = await fetch('http://127.0.0.1:8080/createEvent?'
                                            + '&city=' + event['city']
                                            + '&date=' + event['date']
                                            + '&starttime=' + event['start_time']
                                            + '&endtime=' + event['end_time']
                                            + '&id=' + id
                                            + '&description=' + event['description']
                                            + '&type=' + event['type']
                                            + '&street=' + event['street']
                                            + '&number=' + event['numer']
                                            + '&title=' + event['title']
                                            ,{method: 'post'})

            
            response.text().then(function (text) {
                const data = text
                //dispatch(getPostsSuccess(data))
                console.log(data)
                if (data == "Succes") {
                    window.location.href = "http://localhost:3000/account";
                }
            });
        } catch (error) {
            console.log(error)
            dispatch(createEventFailure())
        }
    }
}