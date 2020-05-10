import * as actions from '../actions/postsActions'

export const initialState = {
  past_posts: [],
  loading: false,
  hasErrors: false,
}

export default function postsPastReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PAST_POSTS:
            return { ...state, loading: true }
        case actions.GET_PAST_POSTS_SUCCESS:
            return { past_posts: action.payload, loading: false, hasErrors: false }
        case actions.GET_PAST_POSTS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}