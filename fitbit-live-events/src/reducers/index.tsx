import { combineReducers } from 'redux'

import postsReducer from './postsReducer'
import postsPastReducer from './postsPastReducer'
import postsFutureReducer from './postsFutureReducer'
import infoReducer from './infoReducer';
import pastUserEventsReducer from './pastUserEventsReducer';
import futureUserEventsReducer from './futureUserEventsReducer';
import createEventReducer from './createEventReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  past_posts: postsPastReducer,
  future_posts: postsFutureReducer,
  past_user_events: pastUserEventsReducer,
  future_user_events: futureUserEventsReducer,
  info: infoReducer,
  create_event: createEventReducer,
})

export default rootReducer
