import { combineReducers } from 'redux'
import LocationReducer from './location_reducer'
import LocationListReducer from './locations_reducer'
import SubmittedReducer from './submitted_reducer'
import MapCenterReducer from './map_center_reducer'

const rootReducer = combineReducers({
  location: LocationReducer,
  locationsList: LocationListReducer,
  submitted: SubmittedReducer,
  mapCenter: MapCenterReducer
})

export default rootReducer
