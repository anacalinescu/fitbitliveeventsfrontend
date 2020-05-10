import * as actions from '../actions/postsActions'

export const initialState = {
  future_user_events: [],
  loading: false,
  hasErrors: false,
}

export default function futureUserEventsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_FUTURE_USER_EVENTS:
            return { ...state, loading: true }
        case actions.GET_FUTURE_USER_EVENTS_SUCCESS:
            return { future_user_events: action.payload, loading: false, hasErrors: false }
        case actions.GET_FUTURE_USER_EVENTS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}