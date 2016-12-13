export const FETCH_LOCATION = 'FETCH_LOCATION'

export function fetchLocation(loc) {
  return {
    type: FETCH_LOCATION,
    payload: loc
  }
}
