export const FETCH_LOCATION = 'FETCH_LOCATION'
export const FORM_SUBMITTED = 'FORM_SUBMITTED'
export const MAP_CENTER = 'MAP_CENTER'
export const ACTIVE_LOC = 'ACTIVE_LOC'
export const FILTER_CAT = 'FILTER_CAT'

export function fetchLocation(loc) {
  return {
    type: FETCH_LOCATION,
    payload: loc
  }
}

export function submitForm(bool) {
  return {
    type: FORM_SUBMITTED,
    payload: bool
  }
}

export function mapCenter(loc) {
  return {
    type: MAP_CENTER,
    payload: loc
  }
}

export function setActiveLoc(id) {
  return {
    type: ACTIVE_LOC,
    payload: id
  }
}

export function filterCategory(id) {
  return {
    type: FILTER_CAT,
    payload: id
  }
}