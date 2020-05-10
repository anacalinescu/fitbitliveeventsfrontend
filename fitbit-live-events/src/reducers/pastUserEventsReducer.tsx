import * as actions from '../actions/postsActions'

export const initialState = {
  past_user_events: [],
  loading: false,
  hasErrors: false,
}

export default function pastUserEventsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PAST_USER_EVENTS:
            return { ...state, loading: true }
        case actions.GET_PAST_USER_EVENTS_SUCCESS:
            return { past_user_venets: action.payload, loading: false, hasErrors: false }
        case actions.GET_PAST_USER_EVENTS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}