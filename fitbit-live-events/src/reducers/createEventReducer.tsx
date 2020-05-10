import * as actions from '../actions/postsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
}

export default function createEventReducer(state = initialState, action) {
    switch (action.type) {
        case actions.CREATE_EVENT:
            return { ...state, loading: true }
        case actions.CREATE_EVENT_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}