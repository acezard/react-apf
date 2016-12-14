import { combineReducers } from 'redux'
import LocationReducer from './location_reducer'
import LocationListReducer from './locations_reducer'
import SubmittedReducer from './submitted_reducer'

const rootReducer = combineReducers({
  location: LocationReducer,
  locationsList: LocationListReducer,
  submitted: SubmittedReducer
})

export default rootReducer
