import { combineReducers } from 'redux'
import LocationReducer from './location_reducer'

const rootReducer = combineReducers({
  location: LocationReducer
})

export default rootReducer
