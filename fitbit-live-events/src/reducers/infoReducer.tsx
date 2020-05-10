import * as actions from '../actions/postsActions'

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
}

export default function infoReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_FETCHPS:
            return { ...state, loading: true }
        case actions.GET_FETCHPS_SUCCESS:
            return { info: action.payload, loading: false, hasErrors: false }
        case actions.GET_FETCHPS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}