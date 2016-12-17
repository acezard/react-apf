import { createSelector } from 'reselect'
import geolib from 'geolib'

const listSelector = state => state.locationsList
const centerSelector = state => state.mapCenter

const getComputedList = (locations, mapCenter) => {
  const computedList = locations.map(location => {
    const distance = Math.round(geolib.getDistance(
      {latitude: location.fields['field_address:latitude'], longitude: location.fields['field_address:longitude']},
      {latitude: mapCenter.lat, longitude: mapCenter.lng}
    ) * 0.001)

    return { ...location, distance: distance}
  })

  const sortedComputedList = computedList.sort((a, b) => {
    return a.distance - b.distance
  })

  return sortedComputedList
}

export default createSelector(
  listSelector,
  centerSelector,
  getComputedList
)