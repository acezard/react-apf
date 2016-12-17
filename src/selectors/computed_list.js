import { createSelector } from 'reselect'
import geolib from 'geolib'

const listSelector = state => state.locationsList
const centerSelector = state => state.mapCenter
const activeCat = state => state.filterCat

const getComputedList = (locations, mapCenter, filterCat) => {
  const computedList = locations.filter(location => {
    if (filterCat == "all") return true

    return location.fields["field_structure_category:tid"] == filterCat
  }).map(location => {
    const distance = Math.round(geolib.getDistance(
      {latitude: location.fields['field_address:latitude'], longitude: location.fields['field_address:longitude']},
      {latitude: mapCenter.lat, longitude: mapCenter.lng}
    ) * 0.001)

    return { ...location, distance: distance}
  }).sort((a, b) => {
    return a.distance - b.distance
  })

  return computedList
}

export default createSelector(
  listSelector,
  centerSelector,
  activeCat,
  getComputedList
)