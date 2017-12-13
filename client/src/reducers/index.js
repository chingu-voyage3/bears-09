import { combineReducers } from 'redux'
import PodcastsReducer from './podcastsReducer'

const rootReducer = combineReducers({
  podcasts: PodcastsReducer  // Adds this key-value pair to our global app state 
})

export default rootReducer