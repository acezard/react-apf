import { combineReducers } from 'redux'
import LocationReducer from './location_reducer'
import LocationListReducer from './locations_reducer'
import SubmittedReducer from './submitted_reducer'
import MapCenterReducer from './map_center_reducer'
import ActiveLocReducer from './active_loc_reducer'
import FilterCatReducer from './filter_cat_reducer'

const rootReducer = combineReducers({
  location: LocationReducer,
  locationsList: LocationListReducer,
  submitted: SubmittedReducer,
  mapCenter: MapCenterReducer,
  activeLoc: ActiveLocReducer,
  filterCat: FilterCatReducer
})

export default rootReducer
