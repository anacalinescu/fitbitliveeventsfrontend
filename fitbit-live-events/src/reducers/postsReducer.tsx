import * as actions from '../actions/postsActions'

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_EVENTS:
            return { ...state, loading: true }
        case actions.GET_EVENTS_SUCCESS:
            return { posts: action.payload, loading: false, hasErrors: false }
        case actions.GET_EVENTS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}