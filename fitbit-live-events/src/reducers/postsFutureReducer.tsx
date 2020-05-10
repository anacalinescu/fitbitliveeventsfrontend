import * as actions from '../actions/postsActions'

export const initialState = {
  future_posts: [],
  loading: false,
  hasErrors: false,
}

export default function postsFutureReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_FUTURE_POSTS:
            return { ...state, loading: true }
        case actions.GET_FUTURE_POSTS_SUCCESS:
            return { future_posts: action.payload, loading: false, hasErrors: false }
        case actions.GET_FUTURE_POSTS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}